import { cantI } from 'src/app/Model/cant.interface';
import { Component, OnInit } from '@angular/core';
import { HistorybyclientService } from 'src/app/services/historybyclient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historydetail',
  templateUrl: './historydetail.page.html',
  styleUrls: ['./historydetail.page.scss'],
})
export class HistorydetailPage implements OnInit {

  HistoryBC : cantI = {};
  id = null;
  total = 0;
  tipo = null;
  ACRP = 0;
  CAP = 0;
  CIP = 0;
  CAXP = 0;
  CTCP = 0;
  CCRP = 0;
  CBIP = 0;
  MLAP = 0;
  MLIP = 0;
  MLSP = 0;
  //precioU
  ACRPU = 0;
  CAPU = 0;
  CIPU = 0;
  CAXPU = 0;
  CTCPU = 0;
  CCRPU = 0;
  CBIPU = 0;
  MLAPU = 0;
  MLIPU = 0;
  MLSPU = 0;
  

  constructor(
    private historyService : HistorybyclientService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id   = this.route.snapshot.params['id'];
    this.tipo = this.route.snapshot.params['tipo'];
    this.historyService.getOne(this.id).subscribe( res => {
      this.HistoryBC = res;
      if(this.tipo == 'Contado'){
        this.ACRP = 55 * this.HistoryBC.ACR;
        this.CAP  = 55 * this.HistoryBC.CA; 
        this.CIP  = 60 * this.HistoryBC.CI;
        this.CAXP = 40 * this.HistoryBC.CAX;
        this.CTCP = 60 * this.HistoryBC.CTC;
        this.CCRP = 55 * this.HistoryBC.CCR;
        this.CBIP = 79 * this.HistoryBC.CBI;
        this.MLAP = 40 * this.HistoryBC.MLA;
        this.MLIP = 70 * this.HistoryBC.MLI;
        this.MLSP = 75 * this.HistoryBC.MLS;
        //Unitario
        this.ACRPU = 55;
        this.CAPU = 55;
        this.CIPU = 60;
        this.CAXPU = 40;
        this.CTCPU = 60;
        this.CCRPU = 55;
        this.CBIPU = 79;
        this.MLAPU = 40;
        this.MLIPU = 70;
        this.MLSPU = 75;
      } else if (this.tipo == 'Consignacion'){
        this.ACRP = 84 * this.HistoryBC.ACR;
        this.CAP  = 60 * this.HistoryBC.CA; 
        this.CIP  = 84 * this.HistoryBC.CI;
        this.CAXP = 45 * this.HistoryBC.CAX;
        this.CTCP = 65 * this.HistoryBC.CTC;
        this.CCRP = 79 * this.HistoryBC.CCR;
        this.CBIP = 84 * this.HistoryBC.CBI;
        this.MLAP = 55 * this.HistoryBC.MLA;
        this.MLIP = 75 * this.HistoryBC.MLI;
        this.MLSP = 80 * this.HistoryBC.MLS;
        //Unitario
        this.ACRPU = 84;
        this.CAPU = 60;
        this.CIPU = 84;
        this.CAXPU = 45;
        this.CTCPU = 65;
        this.CCRPU = 79;
        this.CBIPU = 84;
        this.MLAPU = 55;
        this.MLIPU = 75;
        this.MLSPU = 80;
      }

      this.total = this.ACRP+this.CAP+this.CIP+this.CAXP+this.CTCP+this.CCRP+this.CBIP+this.MLAP+this.MLIP+this.MLSP;
    });
  }

}
