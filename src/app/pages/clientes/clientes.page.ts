import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { clienteI } from 'src/app/Model/clientes.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes : clienteI[];

  constructor( private clienteService : ClientesService, private router : Router) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe( res => {
      this.clientes = res;
      console.log('clientes', res);
    });
  }

  addClient(){
    this.router.navigateByUrl('/addcliente');
  }

}
