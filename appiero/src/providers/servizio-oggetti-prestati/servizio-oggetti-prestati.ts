import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OggettoPrestato } from "../../models/oggettoPrestato";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

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

  constructor(public http: HttpClient) {
    for (let i = 0; i < 3; i++) {
      this.oggettiPrestati.push({
        id: i,
        nome: this.nomiOggetti[i],
        aChi: this.nomiPersone[i],
        quando: this.quandoPrestito[i],
        fotografia: this.fotografie[i],
        ritornato: this.statoPrestito[i]
      });
    }
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
  }


  aggiungiPrestito(oggetto: OggettoPrestato){
    this.oggettiPrestati.push(oggetto);
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
  }
}
