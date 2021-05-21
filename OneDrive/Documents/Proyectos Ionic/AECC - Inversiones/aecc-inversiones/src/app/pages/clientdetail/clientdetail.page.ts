import { clienteI } from 'src/app/Model/clientes.interface';
import { ClientesService } from './../../services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.page.html',
  styleUrls: ['./clientdetail.page.scss'],
})
export class ClientdetailPage implements OnInit {

  cid = null;
  client : clienteI = {};

  constructor(
    private route : ActivatedRoute,
    private clientService : ClientesService,
    private alertCtrl : AlertController,
    private router : Router
  ) { }

  ngOnInit() {
    this.cid = this.route.snapshot.params['id'];
    this.clientService.getOneClient(this.cid).subscribe( res => {
      this.client = res;
    });
  }

  async delete(){

    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: '¿Está seguro de eliminar este cliente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Eliminar',
          handler: (blah) => {
            console.log('Continuar');
            this.clientService.deleteClient(this.cid);
            this.router.navigateByUrl('/clientes');
          }
        }
      ]
    });

    await alert.present();
  }

}
