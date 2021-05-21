import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inventarioI } from 'src/app/Model/inventario.interface';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.page.html',
  styleUrls: ['./itemdetails.page.scss'],
})
export class ItemdetailsPage implements OnInit {

  Inventario : inventarioI = {};
  invid = null;

  constructor( private invService : InventarioService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.invid = this.route.snapshot.params['id'];
    this.getItem();
  }

  getItem(){
    this.invService.getOne(this.invid).subscribe( res => {
      this.Inventario = res;
      console.log(res);
    })
  }

}
