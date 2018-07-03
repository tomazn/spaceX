import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CapsulesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CapsulesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CapsulesProvider Provider');
  }

  getCapsules(): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/capsules')
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  getCapsule(capsuleName): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/capsules' + capsuleName)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }

}
