import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: any;

  constructor() { }

  ngOnInit() {
    this.tasks = [
      {
        id: 1,
        name: 'テストタスク',
        description: 'テスト概要',
        createdAt: '2017-01-01T00:00:00',
        updatedAt: '2017-01-01T00:00:00'
      },
      {
        id: 2,
        name: 'テストタスク2',
        description: 'テスト2概要',
        createdAt: '2017-01-07T00:00:00',
        updatedAt: '2017-01-07T00:00:00'
      }
    ];
  }

}
