import { Component } from '@angular/core';
import { LaunchesProvider } from '../../providers/launches/launches';
import { LaunchesDetailsComponent } from '../launches-details/launches-details';
import { NavController } from 'ionic-angular';

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
  loadLaunches : boolean = false;

  constructor(private launchesProvider: LaunchesProvider, private navCtrl: NavController) {
    this.getLaunches();
  }

  getLaunches(): void {
    this.loadLaunches = true;
      this.launchesProvider.getLaunches()
      .then(res => {
          this.launches = res;
          this.loadLaunches = false;
      },
    error => console.log(error));
  }

  navLaunchDetails(Launch : any): void{   
    this.navCtrl.push(LaunchesDetailsComponent, Launch);   
  } 
}
