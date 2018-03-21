import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { OggettoPrestato } from '../../models/oggettoPrestato';
import { ServizioOggettiPrestatiProvider } from '../../providers/servizio-oggetti-prestati/servizio-oggetti-prestati';
import { FotografieProvider } from '../../providers/fotografie/fotografie';

@IonicPage()
@Component({
  selector: 'page-aggiungi-prestito0',
  templateUrl: 'aggiungi-prestito.html'
})
export class AggiungiPrestitoPage {
  oggetto: OggettoPrestato;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private servizioOggettiPrestati: ServizioOggettiPrestatiProvider,
    private servizioFotografie: FotografieProvider
  ) {
    this.oggetto = new OggettoPrestato();
  }

  ionViewDidLoad() {}

  salvaNuovoPrestito() {
    this.servizioOggettiPrestati.numeroOggettiPrestati().subscribe(numeroElementi => this.oggetto.id= numeroElementi);
    this.servizioOggettiPrestati.aggiungiPrestito(this.oggetto);
    this.navCtrl.pop();
  }

  nuovaImmagine() {
    
    this.servizioFotografie.scattaFotografia().then(
      imageData => {
        this.oggetto.fotografia = 'data:image/jpeg;base64,'+ imageData;
      },
      err => {
        this.oggetto.fotografia = '';
        alert('Impossibile scattare fotografia');
      }
    );
  }
}
