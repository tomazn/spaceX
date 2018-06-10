import { Component } from '@angular/core';
import { LaunchpadsProvider } from '../../providers/launchpads/launchpads';

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

  constructor(private LaunchpadsProvider: LaunchpadsProvider) {
    this.getLaunchpads();
  }

  getLaunchpads(): void {
    this.LaunchpadsProvider.getLaunchpads()
    .then(
      res => this.launchpadsList = res,
      error => console.log(error)
    )
  }

}
