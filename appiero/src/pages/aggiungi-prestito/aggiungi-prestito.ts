import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OggettoPrestato } from '../../models/oggettoPrestato';
import { ServizioOggettiPrestatiProvider } from '../../providers/servizio-oggetti-prestati/servizio-oggetti-prestati';

/**
 * Generated class for the AggiungiPrestitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aggiungi-prestito',
  templateUrl: 'aggiungi-prestito.html',
})
export class AggiungiPrestitoPage {

  oggetto: OggettoPrestato;
  constructor(public navCtrl: NavController, public navParams: NavParams, private servizioOggettiPrestati: ServizioOggettiPrestatiProvider) {
    this.oggetto = new OggettoPrestato();
  }

  ionViewDidLoad() {
  }

  salvaNuovoPrestito(){
    this.servizioOggettiPrestati.aggiungiPrestito(this.oggetto);
    this.navCtrl.pop();
  }

}
