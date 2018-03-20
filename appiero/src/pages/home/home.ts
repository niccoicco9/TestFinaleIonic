import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServizioOggettiPrestatiProvider } from '../../providers/servizio-oggetti-prestati/servizio-oggetti-prestati';
import { OggettoPrestato } from '../../models/oggettoPrestato';
import { DettaglioPrestitoPage } from '../dettaglio-prestito/dettaglio-prestito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaOggettiPrestati: OggettoPrestato[];
  constructor(public navCtrl: NavController, private serviceObjectOnLoan: ServizioOggettiPrestatiProvider) {
  }

  ionViewDidLoad(){
    this.serviceObjectOnLoan.getOggettiPrestati().subscribe(oggetti => this.listaOggettiPrestati = oggetti);
  }

  vaiDettaglioPrestito(oggetto: OggettoPrestato){
    this.navCtrl.push(DettaglioPrestitoPage,{
      prestito: oggetto
    });
  }

  cambiaStatoRestituzione(oggetto: OggettoPrestato){
    oggetto.ritornato = !oggetto.ritornato;
  }

}
