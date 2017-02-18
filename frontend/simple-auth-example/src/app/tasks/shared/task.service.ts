import {Injectable} from '@angular/core';
import {Task} from './task.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import {Angular2TokenService} from 'angular2-token';

@Injectable()
export class TaskService {

  constructor(
    private tokenService: Angular2TokenService
  ) { }

  getTasks(): Observable<Task[]> {
    return this
      .tokenService
      .get('api/tasks')
      .map(r => r.json())
      .map(r => {
        return r.map(t =>
          new Task({
            id: t['id'],
            name: t['name'],
            description: t['description'],
            createdAt: t['created_at'],
            updatedAt: t['updated_at']
          })
        );
      });
  }

  getTask(id: number): Observable<Task> {
    return this
      .tokenService
      .get('api/tasks/' + id)
      .map(r => r.json())
      .map(t => new Task({
          id: t['id'],
          name: t['name'],
          description: t['description'],
          createdAt: t['created_at'],
          updatedAt: t['updated_at']
        })
      );
  }
}
