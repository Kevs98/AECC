import { map } from 'rxjs/operators';
import { cantI } from './../Model/cant.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorybyclientService {

  private hbcCollection : AngularFirestoreCollection<cantI>;
  private hbc : Observable<any>;

  constructor( private bd : AngularFirestore) {
    this.hbcCollection = this.bd.collection<cantI>('Historial');
    this.hbc = this.hbcCollection.snapshotChanges().pipe( map (actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id   = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  gethbc(){
    return this.hbc;
  }

  getOne(id: string){
    return this.hbcCollection.doc(id).valueChanges();
  }

  saveHistoryBC( form : cantI, name : string, id : string ){
    const formObj = {
      ID    : id,
      NAME  : name,
      fecha : form.fecha,
      ACR  : Number(form.ACR),
      CA   : Number(form.CA),
      CI   : Number(form.CI),
      CAX  : Number(form.CAX),
      CTC  : Number(form.CTC),
      CCR  : Number(form.CCR),
      CBI  : Number(form.CBI),
      MLA  : Number(form.MLA),
      MLI  : Number(form.MLI),
      MLS  : Number(form.MLS)
    }
    console.log('test', formObj);
    this.hbcCollection.add(formObj);
  }
}
