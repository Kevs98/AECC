import { cantI } from './../../Model/cant.interface';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clienthistory',
  templateUrl: './clienthistory.page.html',
  styleUrls: ['./clienthistory.page.scss'],
})
export class ClienthistoryPage implements OnInit {

  private historyCollection : AngularFirestoreCollection<cantI>;
  private history : Observable<any>;
  hid = null;
  Ah : cantI[];
  tipo = null;

  constructor( 
    private bd : AngularFirestore,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.hid  = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];
    console.log('id', this.hid);
    this.getHistory();
    this.getAllH().subscribe( res => {
      this.Ah = res;
      console.log('res', this.Ah);
    })
  }

  getHistory(){
    this.historyCollection = this.bd.collection<cantI>('Historial', ref => ref.where('ID', '==', this.hid));
    this.history = this.historyCollection.snapshotChanges().pipe( map (actions => {
      return actions.map( a => {
        const data = a.payload.doc.data();
        const id   = a.payload.doc.id;
        return {id, ...data}
      });
    }));
  }

  getAllH(){
    return this.history;
  }

}
