import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PersonaComponent
  ]
})
export class DirectivasModule { }
