import {Component, OnInit} from '@angular/core';
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

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

  onSubmit(t: Task) {
    this.taskService.updateTask(t).subscribe(
      _ => {
        this.router.navigate(['/tasks']);
      },
      _ => {
        alert("Internal Server Error");
      }
    );
  }

}
