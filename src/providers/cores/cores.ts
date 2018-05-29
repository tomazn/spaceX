import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoresProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CoresProvider Provider');
  }

  getCores(query): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/parts/cores' + query)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }

}
