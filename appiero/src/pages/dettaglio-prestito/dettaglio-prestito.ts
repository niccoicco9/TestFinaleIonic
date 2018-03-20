import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OggettoPrestato } from '../../models/oggettoPrestato';

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

  oggetto: OggettoPrestato;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.oggetto = this.navParams.get('prestito');
  }

  ionViewDidLoad() {
  }

}
