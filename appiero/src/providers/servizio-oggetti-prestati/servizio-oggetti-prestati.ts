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
  oggettiPrestati: OggettoPrestato[] = [];
  nomiOggetti = ["Album", "Telefono", "Computer"];
  nomiPersone = ["Marco", "Giovanni", "Paolo"];
  quandoPrestito = ["19 Marzo", "21 Settembre", "15 Aprile"];
  fotografie = ["../../assets/imgs/album.png", "../../assets/imgs/telefono.jpeg", "../../assets/imgs/computer.jpg"];
  statoPrestito = [true, false, false];

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

  
}
