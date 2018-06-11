import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'; 

/**
 * Generated class for the LaunchpadsDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'launchpads-details',
  templateUrl: 'launchpads-details.html'
})
export class LaunchpadsDetailsComponent {

  launchpad : any;

  constructor(private NavParams: NavParams) {
    this.launchpad = this.NavParams.data;
  }

}
