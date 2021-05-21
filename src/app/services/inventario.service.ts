import { cantI } from './../Model/cant.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { inventarioI } from '../Model/inventario.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private inventarioColection : AngularFirestoreCollection<inventarioI>;
  private inventario          : Observable<inventarioI[]>

  constructor( private bd : AngularFirestore) { 
    this.inventarioColection = bd.collection<inventarioI>('Inventario');
    this.inventario = this.inventarioColection.snapshotChanges().pipe(map( actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id   = a.payload.doc.id;
        return {id, ...data};
      });
    }
    ));
  }

  getInv(){
    return this.inventario;
  }

  getOne(id: string){
    return this.inventarioColection.doc(id).valueChanges();
  }
}
