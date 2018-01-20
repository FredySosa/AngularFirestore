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


  constructor(public tareaServ: TareaService) { }

  ngOnInit() {
    this.tareaServ.getTareas().subscribe(tareas => {
      console.log(tareas);
    });
  }

}
