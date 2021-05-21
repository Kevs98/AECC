import { clienteI } from 'src/app/Model/clientes.interface';
import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.page.html',
  styleUrls: ['./addcliente.page.scss'],
})
export class AddclientePage implements OnInit {

  ubication = null;

  createFormGroup(){
    return new FormGroup({
      nombre      : new FormControl(''),
      apellido    : new FormControl(''),
      identidad   : new FormControl(''),
      telefono    : new FormControl(''),
      direccion   : new FormControl(''),
      ubicacion   : new FormControl(''),
      tipo        : new FormControl('')
    });
  }

  AddClient : FormGroup;

  constructor( 
    private clientService : ClientesService, 
    private geolocation : Geolocation,
    private router : Router
  ) { 
    this.AddClient = this.createFormGroup();
  }

  ngOnInit() {

  }

  locate(){
    this.geolocation.getCurrentPosition().then( pos => {
      let lat = pos.coords.latitude;
      let lng = pos.coords.longitude;
      this.ubication = lat+','+lng;
      console.log('ub', this.ubication);
      alert('Ubicación obtenida las coordenadas son: '+this.ubication);
    });
  }

  onSave(cliente : clienteI){
    this.geolocation.getCurrentPosition().then( pos => {
      let lat = pos.coords.latitude;
      let lng = pos.coords.longitude;
      this.ubication = lat+','+lng;
      console.log('ub', this.ubication);
      this.clientService.saveClient(cliente,this.ubication);
      alert('Cliente Almacenado');
      this.router.navigateByUrl('/clientes')
    }).catch((err) => {
      alert(err);
    });
  }

}
