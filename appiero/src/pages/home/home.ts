import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServizioOggettiPrestatiProvider } from '../../providers/servizio-oggetti-prestati/servizio-oggetti-prestati';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private serviceObjectOnLoan: ServizioOggettiPrestatiProvider) {
  }

  ionViewDidLoad(){
    this.serviceObjectOnLoan.getOggettiPrestati().subscribe(oggetti => console.log(oggetti));
  }

}
