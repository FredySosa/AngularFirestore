import { Component, OnInit } from '@angular/core';

import { Tarea } from '../../modelos/Tarea';
import { TareaService } from '../../servicios/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: Tarea[];
  editar: boolean;
  tareaEdita: Tarea;

  constructor(public tareaServ: TareaService) { }

  ngOnInit() {
    this.tareaServ.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }


  deleteTarea(event, tarea) {
    const respuesta = confirm('¿Estas seguro de eliminar esta chunche?');
    if (respuesta) {
      this.tareaServ.deleteTarea(tarea);
    }
    return;
  }


  editTarea(event, tarea) {
    this.editar = !this.editar;
    this.tareaEdita = tarea;
  }


  updateTarea(tarea) {
    this.tareaServ.updateTarea(tarea);
    this.tareaEdita = null;
    this.editar = false;
  }
}
