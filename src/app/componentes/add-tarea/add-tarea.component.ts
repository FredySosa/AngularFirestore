import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TareaService } from '../../servicios/tarea.service';
import { Tarea } from '../../modelos/Tarea';



@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrls: ['./add-tarea.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddTareaComponent implements OnInit {

  tarea: Tarea = {
    titulo: '',
    descripcion: ''
  };


  constructor(private tareaServ: TareaService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.tarea.titulo !== '' && this.tarea.descripcion !== '') {
      this.tareaServ.addTarea(this.tarea);
      this.tarea.titulo = '';
      this.tarea.descripcion = '';
    }
  }

}
