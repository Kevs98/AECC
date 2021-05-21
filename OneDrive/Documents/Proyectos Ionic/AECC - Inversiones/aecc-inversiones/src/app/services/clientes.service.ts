import { clienteI } from './../Model/clientes.interface';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clienteCollection : AngularFirestoreCollection<clienteI>
  clientes : Observable<clienteI[]>;

  constructor( private bd : AngularFirestore) { 
    this.clienteCollection = bd.collection<clienteI>('Clientes');
    this.clientes = this.clienteCollection.snapshotChanges().pipe( map ( actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id   = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  getClientes() {
    return this.clientes;
  }

  getOneClient( id : string){
    return this.clienteCollection.doc(id).valueChanges();
  }

  saveClient( client : clienteI, ubication : string){
    const clientObj = {
      nombre     : client.nombre,
      apellido   : client.apellido,
      identidad  : client.identidad,
      telefono   : client.telefono,
      direccion  : client.direccion,
      ubicacion  : ubication,
      tipo       : client.tipo
    }

    console.log('Client', clientObj);
    this.clienteCollection.add(clientObj);
  }

  deleteClient(id :string){
    let deleteDoc = this.bd.collection('Clientes').doc(id).delete();
  }
}
