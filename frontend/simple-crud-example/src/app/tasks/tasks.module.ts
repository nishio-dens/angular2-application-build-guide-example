import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  declarations: [TasksComponent, TaskListComponent, TaskNewComponent, TaskDetailComponent]
})
export class TasksModule { }
