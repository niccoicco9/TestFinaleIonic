import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OggettoPrestato } from '../../models/oggettoPrestato';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oggettoCondiviso = this.navParams.get('prestito');
    this.oggettoLocale = Object.assign({}, this.oggettoCondiviso);  // Mi serve per fare una copia in locale del contenuto dell'oggetto che mi arriva dalla lista
    
  }

  ionViewDidLoad() {
  }

  salvaModifiche(){
    this.oggettoCondiviso.id = this.oggettoLocale.id;
    this.oggettoCondiviso.nome = this.oggettoLocale.nome;
    this.oggettoCondiviso.quando = this.oggettoLocale.quando;
    this.oggettoCondiviso.aChi = this.oggettoLocale.aChi;
    this.oggettoCondiviso.fotografia = this.oggettoLocale.fotografia;
    this.oggettoCondiviso.ritornato = this.oggettoLocale.ritornato;

    // Torno indietro alla home
    this.navCtrl.pop();
  }

}
