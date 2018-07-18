import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { RocketsProvider } from '../../providers/rockets/rockets';
import { RocketsDetailsComponent } from '../rockets-details/rockets-details';
import { LaunchpadsProvider } from '../../providers/launchpads/launchpads';
import { LaunchpadsDetailsComponent } from '../launchpads-details/launchpads-details';
import { CoresProvider } from '../../providers/cores/cores';
import { CoresDetailsComponent } from '../cores-details/cores-details';

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

  constructor(public navParams: NavParams,private navCtrl: NavController, private RocketsProvider: RocketsProvider
  ,private LaunchpadsProvider: LaunchpadsProvider, private CoresProvider: CoresProvider) {
    this.launch = this.navParams.data;   
  }

  navigateRocket(rocket: any): void{

    this.RocketsProvider.getRocket(rocket.rocket_id)
      .then(
        res => {
          res.img = res.id + ".jpg";
          this.navCtrl.push(RocketsDetailsComponent, res);
        },
        error => console.log(error)
      )

  }

  navigateLaunchpad(launchpad: any): void{
    this.LaunchpadsProvider.getLaunchpad(launchpad.site_id)
    .then(
      res =>{
        this.navCtrl.push(LaunchpadsDetailsComponent, res);
      },
      error => console.log(error)
    )
  }

  navigateCores(core: any): void{
    this.CoresProvider.getCores("/"+core)
    .then(
      res => {
        this.navCtrl.push(CoresDetailsComponent, res)
      },
      error => console.log(error)
    )
  }

}
