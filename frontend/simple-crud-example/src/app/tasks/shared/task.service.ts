import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Task} from './task.model';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  constructor(
    private http: Http
  ) { }

  getTasks(): Observable<Task[]> {
    return this
      .http
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
      .http
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

  createTask(task: Task): Observable<any> {
    return this
      .http
      .post('api/tasks/', JSON.stringify(task))
      .map(r => r.json());
  }

  updateTask(task: Task): Observable<any> {
    return this
      .http
      .put('api/tasks/' + task.id, JSON.stringify(task))
      .map(r => r.json());
  }
}
