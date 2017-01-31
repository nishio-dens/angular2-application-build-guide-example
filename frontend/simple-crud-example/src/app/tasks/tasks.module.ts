import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksRoutingModule} from './tasks-routing.module';
import {TasksComponent} from './tasks.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskNewComponent} from './task-new/task-new.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {SharedModule} from '../shared/shared.module';
import {TaskService} from './shared/task.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskNewComponent,
    TaskDetailComponent
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
