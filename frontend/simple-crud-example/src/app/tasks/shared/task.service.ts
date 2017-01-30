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
      .get('http://localhost:9393/api/tasks')
      .map(r => r.json())
      .map(r => {
        return r.map(t =>
          new Task({
            id: r['id'],
            name: r['name'],
            description: r['description'],
            createdAt: r['createdAt'],
            updatedAt: r['updatedAt']
          })
        );
      });
  }
}
