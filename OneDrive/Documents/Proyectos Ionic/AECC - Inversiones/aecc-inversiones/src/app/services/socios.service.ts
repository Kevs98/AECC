import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { sociosI } from '../Model/socios.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SociosService {

  private sociosCollection : AngularFirestoreCollection<sociosI>;
  private socios           : Observable<sociosI[]>;

  constructor( private bd : AngularFirestore) { 
    this.sociosCollection = bd.collection<sociosI>('Socios');
    this.socios = this.sociosCollection.snapshotChanges().pipe(map( actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id   = a.payload.doc.id;
        return {id, ...data};
      });
    }
    ));
  }

  getAll(){
    return this.socios;
  }
}
