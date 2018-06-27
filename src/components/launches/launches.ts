import { Component } from '@angular/core';
import { LaunchesProvider } from '../../providers/launches/launches';

/**
 * Generated class for the LaunchesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'launches',
  templateUrl: 'launches.html'
})
export class LaunchesComponent {

  launches: any[];

  constructor(private launchesProvider: LaunchesProvider) {
    this.getLaunches();
  }

  getLaunches(): void {
      this.launchesProvider.getLaunches()
      .then(res => {
          this.launches = res;
      },
    error => console.log(error));
  }


}
