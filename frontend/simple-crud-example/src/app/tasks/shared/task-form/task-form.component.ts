import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Task} from '../task.model';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task;
  @Output() saveTask: EventEmitter<Task> = new EventEmitter();
  taskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.taskForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      'description': ['', Validators.maxLength(255)]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.saveTask.emit(this.task);
  }

}
