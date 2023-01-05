import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  persona = { nombre: '', apellido: '', edad: 0 };
  personas = [ {nombre: 'Mari', apellido: 'Garcia', edad: 17} ];

  agregar(){
    this.personas.push(this.persona);
    this.persona = { nombre: '', apellido: '', edad: 0 }
  }
}

