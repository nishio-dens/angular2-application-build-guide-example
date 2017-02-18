import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Task} from './task.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';

@Injectable()
export class TaskService {

  private baseUrl: string = environment.apiBaseUrl;

  constructor(
    private http: Http
  ) { }

  getTasks(): Observable<Task[]> {
    return this
      .http
      .get(this.baseUrl + 'api/tasks')
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
      .http
      .get(this.baseUrl + 'api/tasks/' + id)
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
