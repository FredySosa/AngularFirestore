import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TareasComponent } from './componentes/tareas/tareas.component';
import { AddTareaComponent } from './componentes/add-tarea/add-tarea.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { TareaService } from './servicios/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    AddTareaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'AngularEjemplo')
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
