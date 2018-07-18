import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LaunchpadsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LaunchpadsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LaunchpadsProvider Provider');
  }

  getLaunchpads(): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/launchpads')
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  getLaunchpad(launchpadName): Promise<any> {
    return this.http.get('https://api.spacexdata.com/v2/launchpads/' + launchpadName)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }

}
