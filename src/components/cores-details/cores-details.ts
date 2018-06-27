import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoresDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cores-details',
  templateUrl: 'cores-details.html'
})
export class CoresDetailsComponent {

  core: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.core = this.navParams.data;
  }

}
