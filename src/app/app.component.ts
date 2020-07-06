import {Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from './todo-models/board.model';
import { Column } from './todo-models/column.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-project';
  form = new FormGroup({});
  model: any = {};
  todoText: string = "";
  todoList: any = [];
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Input',
      type: 'input',
      templateOptions: {
        label: 'Nazwa',
        placeholder: 'Dodaj zadanie',
        required: true,
        readOnly: true,
      },
    },
    {
      key: 'Select',
      type: 'select',
      templateOptions: {
        label: 'Status',
        placeholder: 'Do zrobienia',
        required: false,
        options: [
          { value: 1, label: 'Do zrobienia' },
          { value: 2, label: 'W toku' },
          { value: 3, label: 'Gotowe' },
        ],
      },
    },
    {
      key: 'Textarea',
      type: 'textarea',
      templateOptions: {
        label: 'Opis',
        required: false,
      },
    },
    {
      key: 'Datepicker',
      type: 'datepicker',
      templateOptions: {
        label: 'Termin',
        placeholder: 'Brak',
        required: false,
      },
    },
    {
      key: 'Radio',
      type: 'radio',
      templateOptions: {
        label: 'Piorytet',
        required: false,
        options: [
          { value: 1, label: 'Niski ' },
          { value: 2, label: 'Średni ' },
          { value: 3, label: 'Wysoki ' },
        ],
      },
    },

  ];
  submit() {
    alert(JSON.stringify(this.todoList));
  }

  constructor() { }

  onAddTodoText() {
    if (this.todoText!=""){
      console.log("adding the todoText - ", this.todoText);
      let todoObj = {todoId: this.todoList.length, text: this.todoText};

      this.todoList.push(todoObj);
      this.todoText = "";
    }
  }
  
  onClearTodoText() {
    console.log("clearing the todoList - ", this.todoList);
    this.todoList=[];
    this.todoText="";
  }

  board: Board = new Board('Test Board', [
    new Column('Do zrobienia', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Column('W toku', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Column('Gotowe', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}