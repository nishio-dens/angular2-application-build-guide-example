import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TasksComponent} from './tasks.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import {Angular2TokenService} from 'angular2-token';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    canActivate: [Angular2TokenService],
    children: [
      {
        path: '',
        component: TaskListComponent,
        canActivate: [Angular2TokenService]
      },
      {
        path: 'tasks',
        component: TaskListComponent,
        canActivate: [Angular2TokenService]
      },
      {
        path: 'tasks/:id',
        component: TaskDetailComponent,
        canActivate: [Angular2TokenService]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [
    Angular2TokenService
  ]
})
export class TasksRoutingModule { }
