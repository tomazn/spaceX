import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RocketsDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rockets-details',
  templateUrl: 'rockets-details.html'
})
export class RocketsDetailsComponent {

  rocket: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rocket = this.navParams.data; 
  }


}
