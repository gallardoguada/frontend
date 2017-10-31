import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {
  title = 'mi Proyecto';
  Mostrarform : boolean;

  constructor(){
   this.Mostrarform = false;
  }

  setEstado(){
    this.Mostrarform = !this.Mostrarform ;
  }



  ngOnInit() {
  }

}
