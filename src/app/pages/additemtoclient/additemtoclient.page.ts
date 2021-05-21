import { ClientesService } from './../../services/clientes.service';
import { clienteI } from 'src/app/Model/clientes.interface';
import { cantI } from './../../Model/cant.interface';
import { InventarioService } from './../../services/inventario.service';
import { inventarioI } from 'src/app/Model/inventario.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HistorybyclientService } from 'src/app/services/historybyclient.service';

@Component({
  selector: 'app-additemtoclient',
  templateUrl: './additemtoclient.page.html',
  styleUrls: ['./additemtoclient.page.scss'],
})
export class AdditemtoclientPage implements OnInit {

  items  : inventarioI[];
  price  = 0;
  cid    = null;
  client : clienteI = {};
  name   = null;

  createFormGroup(){
    return new FormGroup({
      fecha : new FormControl(''),
      ACR   : new FormControl(),
      CA    : new FormControl(),
      CI    : new FormControl(),
      CAX   : new FormControl(),
      CTC   : new FormControl(),
      CCR   : new FormControl(),
      CBI   : new FormControl(),
      MLA   : new FormControl(),
      MLI   : new FormControl(),
      MLS   : new FormControl()
    });
  }

  AddItems : FormGroup;

  constructor( 
    private invService : InventarioService,
    private route : ActivatedRoute,
    private clientService : ClientesService,
    private hbcService : HistorybyclientService,
    private router : Router
  ) {
    this.AddItems = this.createFormGroup();
   }

  ngOnInit() {
    this.cid = this.route.snapshot.params['id'];

    this.invService.getInv().subscribe( res => {
      this.items = res;
      console.log('nc', this.items);
    })
  }

  calc(){
    this.price = Number(document.getElementById('test'));
    console.log('p', this.price);
  }

  onSave(form : cantI){
    this.clientService.getOneClient(this.cid).subscribe( res => {
      this.client = res;
      this.name = this.client.nombre + ' ' + this.client.apellido;
      this.hbcService.saveHistoryBC(form, this.name, this.client.identidad);
      alert('La caja se ha cargado con Exito');
      this.router.navigateByUrl('/clientdetail/'+this.cid);
    });
  }

}
