import { HistorybyclientService } from './../../services/historybyclient.service';
import { cantI } from './../../Model/cant.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-closebox',
  templateUrl: './closebox.page.html',
  styleUrls: ['./closebox.page.scss'],
})
export class CloseboxPage implements OnInit {

  cierre : cantI = {};
  id     : '';
  tccr = 0;
  tci  = 0;
  tca  = 0;
  tcbi = 0;
  tmli = 0;
  tacr = 0;
  tmla = 0;
  tctc = 0;
  tcax = 0;
  tmls = 0;
  total = 0;

  constructor(
    private historyService : HistorybyclientService,
    private route          : ActivatedRoute,
    private Router         : Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.historyService.getOne(this.id).subscribe( res => {
      this.cierre = res;
      console.log('res', this.cierre);
    })
  }

  Total(){
    let ccr = (<HTMLInputElement>document.getElementById("ccr")).value;
    let ci = (<HTMLInputElement>document.getElementById("ci")).value;
    let ca = (<HTMLInputElement>document.getElementById("ca")).value;
    let cbi = (<HTMLInputElement>document.getElementById("cbi")).value;
    let mli = (<HTMLInputElement>document.getElementById("mli")).value;
    let acr = (<HTMLInputElement>document.getElementById("acr")).value;
    let mla = (<HTMLInputElement>document.getElementById("mla")).value;
    let ctc = (<HTMLInputElement>document.getElementById("ctc")).value;
    let cax = (<HTMLInputElement>document.getElementById("cax")).value;
    let mls = (<HTMLInputElement>document.getElementById("mls")).value;
    this.tccr = this.cierre.CCR * 79 - Number(ccr) * 79;
    this.tci  = this.cierre.CI  * 84 - Number(ci)  * 84;
    this.tca  = this.cierre.CA  * 60 - Number(ca)  * 60;
    this.tcbi = this.cierre.CBI * 84 - Number(cbi) * 84;
    this.tmli = this.cierre.MLI * 75 - Number(mli) * 75;
    this.tacr = this.cierre.ACR * 84 - Number(acr) * 84;
    this.tmla = this.cierre.MLA * 55 - Number(mla) * 55;
    this.tctc = this.cierre.CTC * 65 - Number(ctc) * 65;
    this.tcax = this.cierre.CAX * 45 - Number(cax) * 45;
    this.tmls = this.cierre.MLS * 80 - Number(mls) * 80;
    this.total = this.tccr + this.tci +this.tca + this.tcbi + this.tmli +this.tacr +this.tmla + this.tctc + this.tcax + this.tmls;
  }

  continue(){
    alert('Cierre Finalizado');
    this.Router.navigateByUrl('/cierre');
  }

}
