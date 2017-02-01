import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/task.model';
import {TaskService} from '../shared/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    this.task = new Task();
  }

  onSubmit(t: Task) {
    this.taskService.createTask(t).subscribe(
      _ => {
        this.router.navigate(['/tasks']);
      },
      _ => {
        alert("Internal Server Error");
      }
    );
  }

}
