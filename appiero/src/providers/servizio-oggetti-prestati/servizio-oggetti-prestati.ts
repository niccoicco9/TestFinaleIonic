import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OggettoPrestato } from '../../models/oggettoPrestato';

/*
  Questo servizio si occuperà di andare a fornire gli oggetti prestati ai richiedenti, 
  nonché anche inserire nuovi oggettiPrestati / modifiche.
*/
@Injectable()
export class ServizioOggettiPrestatiProvider {

  oggettiPrestati: OggettoPrestato[] = [];
  nomiOggetti: ['Album', 'Telefono', 'Computer'];
  nomiPersone: ['Marco', 'Giovanni', 'Paolo'];
  quandoPrestito: ['19 Marzo', '21 Settembre', '15 Aprile'];
  fotografie: ['', '', ''];
  statoPrestito: [true, false, false];

  constructor(public http: HttpClient) {
    for(let i = 0; i < 3; i++){
      this.oggettiPrestati[i] = new OggettoPrestato(
        this.nomiOggetti[i],
        this.nomiPersone[i],
        this.quandoPrestito[i],
        this.fotografie[i],
        this.statoPrestito[i]
      );
    }
  }

}
