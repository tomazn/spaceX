import { Component } from '@angular/core';
import { CompanyProvider } from '../../providers/company/company';
import {company} from '../../model/company';
/**
 * Generated class for the CompanyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'company',
  templateUrl: 'company.html'
})
export class CompanyComponent {

  loadCompany: boolean = false;
  company: company = new company();

  constructor(private CompanyProvider: CompanyProvider) {
    this.getCompanyInfo();
  }

  getCompanyInfo(): void {
    this.loadCompany = true;
    this.CompanyProvider.getCompanyInfo()
    .then(
      res => {
        this.company = res,
        this.loadCompany = false
      },
      error => console.log(error),
    )
  }

}
