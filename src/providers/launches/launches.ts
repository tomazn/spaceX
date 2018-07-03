import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LaunchesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LaunchesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LaunchesProvider Provider');
  }

  getLaunches(): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/launches')
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  getLaunch(query): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/launches/' + query)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }

}
