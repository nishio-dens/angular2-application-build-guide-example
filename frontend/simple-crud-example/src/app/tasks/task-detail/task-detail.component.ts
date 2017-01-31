import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

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

  onSubmit(values: any) {
    console.log(values);
  }

}
