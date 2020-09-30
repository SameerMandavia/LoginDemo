import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapstoreInputComponent } from '../Capstore-Components/capstore-input/capstore-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const capstoreComponents = [
   CapstoreInputComponent
]

@NgModule({
  declarations: [
    capstoreComponents
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports : [
    capstoreComponents
  ]
})
export class CapstoreComponentsModule { }
