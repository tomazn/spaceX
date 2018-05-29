import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RocketsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RocketsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RocketsProvider Provider');
  }

  getRockets(rocketName): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/rockets' + rocketName)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }

}
