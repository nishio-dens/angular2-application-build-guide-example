import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {TaskService} from '../shared/task.service';
import {Task} from '../shared/task.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task = new Task();
  taskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      'description': ['', Validators.maxLength(255)]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.taskService.getTask(id).subscribe(
        (t: Task) => this.task = t,
        _ => {
          alert("Record Not Found");
          this.router.navigate(['/tasks']);
        }
      );
    });
  }

  onSubmit() {
    this.taskService.updateTask(this.task).subscribe(
      _ => {
        this.router.navigate(['/tasks']);
      },
      _ => {
        alert("Internal Server Error");
      }
    );
  }

}
