import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OggettoPrestato } from '../../models/oggettoPrestato';
import { HomePage } from '../home/home';
import { ServizioOggettiPrestatiProvider } from '../../providers/servizio-oggetti-prestati/servizio-oggetti-prestati';

/**
 * Generated class for the DettaglioPrestitoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dettaglio-prestito',
  templateUrl: 'dettaglio-prestito.html',
})
export class DettaglioPrestitoPage {

  oggettoCondiviso: OggettoPrestato;
  oggettoLocale: OggettoPrestato;

  constructor(public navCtrl: NavController, public navParams: NavParams, private servizioOggettiPrestati : ServizioOggettiPrestatiProvider) {
    this.oggettoCondiviso = this.navParams.get('prestito');
    this.oggettoLocale = Object.assign({}, this.oggettoCondiviso);  // Mi serve per fare una copia in locale del contenuto dell'oggetto che mi arriva dalla lista
    
  }

  ionViewDidLoad() {
  }

  salvaModifiche(){
    this.servizioOggettiPrestati.modificaPrestito(this.oggettoLocale.id, this.oggettoLocale);
    // Torno indietro alla home
    this.navCtrl.pop();
  }

}
