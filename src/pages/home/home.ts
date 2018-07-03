import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListPage } from '../../pages/list/list';
import { CompanyComponent } from '../../components/company/company';
import { LaunchpadsComponent } from '../../components/launchpads/launchpads';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'List', component: ListPage },
      {title: 'Company', component: CompanyComponent},
      {title : 'Launchpads', component: LaunchpadsComponent}
    ];
  }

}
