import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TasksComponent} from './tasks.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {TaskNewComponent} from './task-new/task-new.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: '',
        component: TaskListComponent
      },
      {
        path: 'tasks',
        component: TaskListComponent
      },
      {
        path: 'tasks/new',
        component: TaskNewComponent
      },
      {
        path: 'tasks/:id',
        component: TaskDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TasksRoutingModule { }
