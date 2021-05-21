import { sociosI } from './../../Model/socios.interface';
import { SociosService } from './../../services/socios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.page.html',
  styleUrls: ['./socios.page.scss'],
})
export class SociosPage implements OnInit {
  Socios : sociosI[];

  constructor( private sociosServ : SociosService) { }

  ngOnInit() {
    this.sociosServ.getAll().subscribe( res => {
      this.Socios = res;
    });
  }

}
