import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";
import { OggettoPrestato } from "../../models/oggettoPrestato";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { NativeStorage } from '@ionic-native/native-storage';


/*
  Questo servizio si occuperà di andare a fornire gli oggetti prestati ai richiedenti, 
  nonché anche inserire nuovi oggettiPrestati / modifiche.
*/
@Injectable()
export class ServizioOggettiPrestatiProvider {
  private oggettiPrestati: OggettoPrestato[] = [];
  private nomiOggetti = ["Album", "Telefono", "Computer"];
  private nomiPersone = ["Marco", "Giovanni", "Paolo"];
  private quandoPrestito = ["2018-03-19", "2017-02-21", "2017-04-15"];
  private fotografie = ["../../assets/imgs/album.png", "../../assets/imgs/telefono.jpeg", "../../assets/imgs/computer.jpg"];
  private statoPrestito = [true, false, false];

  constructor(private platform: Platform, private storage: NativeStorage) {
    this.platform.ready().then(
      () => {
        // const oggettoDiProva = new OggettoPrestato();
        // oggettoDiProva.id = 1;
        // oggettoDiProva.nome = 'fsdasfgd';
        // oggettoDiProva.ritornato = false;
        
        if(!localStorage.getItem('oggettiImmagazzinati')) {
          this.storage.setItem('oggettiImmagazzinati', []);
        } else{
          this.storage.getItem('oggettiImmagazzinati').then(
            oggetti => this.oggettiPrestati = oggetti,
            error => console.log(error));
        }
      }
    );
  }

  getOggettiPrestati(): Observable<OggettoPrestato[]> {
    return of(this.oggettiPrestati);
  }

  deleteOggettoPrestato(idOggetto: number) {
    let i = 0;
    while((this.oggettiPrestati[i].id !== idOggetto) && (i < this.oggettiPrestati.length)){
      i++;
    }
    if(i <= this.oggettiPrestati.length){
      this.oggettiPrestati.splice(i,1);
    }
    this.aggiornaStorage('Eliminazione effettuata', 'Impossibile eliminare'); 
  }


  aggiungiPrestito(oggetto: OggettoPrestato){
    this.oggettiPrestati.push(oggetto);
    this.aggiornaStorage('Inserimento avvenuto', 'Inserimento fallito');
  }

  modificaPrestito(idOggetto: number, modificheOggetto: OggettoPrestato){
    let i = 0;
    while((this.oggettiPrestati[i].id !== idOggetto) && (i < this.oggettiPrestati.length)){
      i++;
    }
    this.oggettiPrestati[i].id = modificheOggetto.id;
    this.oggettiPrestati[i].nome = modificheOggetto.nome;
    this.oggettiPrestati[i].quando = modificheOggetto.quando;
    this.oggettiPrestati[i].aChi = modificheOggetto.aChi;
    this.oggettiPrestati[i].fotografia = modificheOggetto.fotografia;
    this.oggettiPrestati[i].ritornato = modificheOggetto.ritornato;

    this.aggiornaStorage('Modifica effettuata', 'Modifica fallita');
  }


  private aggiornaStorage(alertOk, alertFailed) {
    this.storage.remove('oggettiImmagazzinati').then(
      () => this.storage.setItem('oggettiImmagazzinati', this.oggettiPrestati).then(
        () => alert(alertOk),
        () => alert(alertFailed)
      )
    );
  }

  numeroOggettiPrestati():Observable<number> {
    return of(this.oggettiPrestati.length);
  }
}
