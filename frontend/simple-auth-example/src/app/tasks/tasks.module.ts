import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksRoutingModule} from './tasks-routing.module';
import {TasksComponent} from './tasks.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {HttpModule} from '@angular/http';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {TaskService} from './shared/task.service';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    BrowserModule,
    HttpModule
  ],
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
