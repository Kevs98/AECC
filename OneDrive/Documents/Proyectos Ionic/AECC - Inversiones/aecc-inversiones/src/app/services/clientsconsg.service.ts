import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { clienteI } from '../Model/clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientsconsgService {
  clienteCollection : AngularFirestoreCollection<clienteI>
  clientes : Observable<clienteI[]>;

  constructor( private bd : AngularFirestore) { 
    this.clienteCollection = bd.collection<clienteI>('Clientes', ref => ref.where('tipo', '==', 'Consignacion'));
    this.clientes = this.clienteCollection.snapshotChanges().pipe( map ( actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id   = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  getClients() {
    return this.clientes;
  }

  getOneClient( id : string){
    return this.clienteCollection.doc(id).valueChanges();
  }
}
