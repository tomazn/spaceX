import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the LaunchesDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'launches-details',
  templateUrl: 'launches-details.html'
})
export class LaunchesDetailsComponent {

  launch: any;

  constructor(public navParams: NavParams) {
    this.launch = this.navParams.data;   
  }

}
