import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Tarea } from '../modelos/Tarea';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TareaService {
  tareasCollection: AngularFirestoreCollection<Tarea>;
  tareas: Observable<Tarea[]>;
  tareaDoc: AngularFirestoreDocument<Tarea>;

  constructor(public afs: AngularFirestore) {
    this.tareasCollection = afs.collection('tareas');
    this.tareas = this.tareasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tarea;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getTareas() {
    return this.tareas;
  }
}
