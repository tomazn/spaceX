import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { company } from '../../model/company'; 
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CompanyProvider Provider');
  }

  getCompanyInfo(): Promise<company> {
    return this.http.get('https://api.spacexdata.com/v2/info')
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Erreur : ', error);
    return Promise.reject(error.message || error);
  }
}
