import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';


const appearance: MatFormFieldDefaultOptions = {
    appearance: 'outline'
  };

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
      BrowserModule,
      CommonModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatSliderModule,
      MatToolbarModule,
      MatButtonModule,
      ReactiveFormsModule,
      FormlyMaterialModule,
      CommonModule,
      FormlyModule.forRoot({
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
      }),
      MatNativeDateModule,
      FormlyMatDatepickerModule,
      DragDropModule
    ],
    exports: [AppComponent],
    providers: [
      {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: appearance,
        }
    ],
    bootstrap: [AppComponent]
    
  })
export class AppModule { }
