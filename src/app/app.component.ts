import { Component, OnInit } from '@angular/core';
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
          { value: 1, label: 'Niski' },
          { value: 2, label: 'Średni' },
          { value: 3, label: 'Wysoki' },
        ],
      },
    },
  ];


  board: Board = new Board('Test Board', [
    new Column('Do zrobienia', []),
    new Column('W toku', []),
    new Column('Gotowe', []),
  ]);

  constructor() { }

  submit() {
    console.log("adding the task - ", this.model);
    this.board.columns[this.model.Select - 1].tasks.push(this.model.Input);
  }

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