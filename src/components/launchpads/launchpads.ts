import { Component } from '@angular/core';
import { LaunchpadsProvider } from '../../providers/launchpads/launchpads';
import { NavController } from 'ionic-angular'; 
import { LaunchpadsDetailsComponent } from '../launchpads-details/launchpads-details';

/**
 * Generated class for the LaunchpadsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'launchpads',
  templateUrl: 'launchpads.html'
})
export class LaunchpadsComponent {

  launchpadsList : any[];

  constructor(private LaunchpadsProvider: LaunchpadsProvider, private navCtrl: NavController) {
    this.getLaunchpads();
  }

  getLaunchpads(): void {
    this.LaunchpadsProvider.getLaunchpads()
    .then(
      res => this.launchpadsList = res,
      error => console.log(error)
    )
  }

  navLaunchpadDetails(launchpad : any): void{  
    this.navCtrl.push(LaunchpadsDetailsComponent, launchpad);  
  }  

}
