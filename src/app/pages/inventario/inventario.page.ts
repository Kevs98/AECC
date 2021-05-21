import { inventarioI } from './../../Model/inventario.interface';
import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  Inventario : inventarioI[];

  constructor( private invService : InventarioService) { }

  ngOnInit() {
    this.invService.getInv().subscribe( res => {
      this.Inventario = res;
    });
  }

}
