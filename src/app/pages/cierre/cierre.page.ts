import { ClientsconsgService } from './../../services/clientsconsg.service';
import { ClientesService } from './../../services/clientes.service';
import { clienteI } from './../../Model/clientes.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cierre',
  templateUrl: './cierre.page.html',
  styleUrls: ['./cierre.page.scss'],
})
export class CierrePage implements OnInit {

  clientes : clienteI[];

  constructor( private clienteService : ClientsconsgService) { }

  ngOnInit() {
    this.clienteService.getClients().subscribe( res => {
      this.clientes = res;
    });
  }

}
