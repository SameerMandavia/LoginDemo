import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapstoreComponent } from './capstore.component';
import { CapstoreComponentsModule } from "../lib/Capstore-Components/capstore-components.module";


@NgModule({
  declarations: [CapstoreComponent],
  imports: [
    CommonModule,
    
    CapstoreComponentsModule
  ],
  exports: [CapstoreComponent]
})
export class CapstoreModule { }
