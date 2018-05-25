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

  text: string;
  company: company = new company();

  constructor(private CompanyProvider: CompanyProvider) {
    this.text = 'Hello World';
    this.getCompanyInfo();
    console.log(this.company);
  }

  getCompanyInfo(): void {
    this.CompanyProvider.getCompanyInfo()
    .then(
      res => this.company = res,
      error => console.log(error),
    )
  }

}
