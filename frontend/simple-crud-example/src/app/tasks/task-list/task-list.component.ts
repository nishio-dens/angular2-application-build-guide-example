import {Component, OnInit} from '@angular/core';
import {TaskService} from '../shared/task.service';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe(
      (t: Task[]) => {
        this.tasks = t;
      },
      _ => {
        alert("Internal Server Error");
      }
    );
  }

}
