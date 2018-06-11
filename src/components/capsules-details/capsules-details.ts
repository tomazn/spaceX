import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CapsulesDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'capsules-details',
  templateUrl: 'capsules-details.html'
})
export class CapsulesDetailsComponent {

  capsule: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.capsule = this.navParams.data;  
  }

}
