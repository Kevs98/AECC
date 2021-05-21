import { HistorybyclientService } from 'src/app/services/historybyclient.service';
import { cantI } from 'src/app/Model/cant.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-availableclose',
  templateUrl: './availableclose.page.html',
  styleUrls: ['./availableclose.page.scss'],
})
export class AvailableclosePage implements OnInit {

  private historyCollection : AngularFirestoreCollection<cantI>;
  private history : Observable<any>;

  cierres : cantI[];
  idc = null;

  constructor( 
    private route : ActivatedRoute,
    private bd : AngularFirestore
  ) { }

  ngOnInit() {
    this.idc = this.route.snapshot.params['id'];
    this.getHistory();
    this.getAllH().subscribe( res => {
      this.cierres = res;
      console.log('res', this.cierres);
    })
  }

  getHistory(){
    this.historyCollection = this.bd.collection<cantI>('Historial', ref => ref.where('ID', '==', this.idc));
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
