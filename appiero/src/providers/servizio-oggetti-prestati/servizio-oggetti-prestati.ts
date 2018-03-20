import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Questo servizio si occuperà di andare a fornire gli oggetti prestati ai richiedenti, 
  nonché anche inserire nuovi oggettiPrestati / modifiche.
*/
@Injectable()
export class ServizioOggettiPrestatiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServizioOggettiPrestatiProvider Provider');
  }

}
