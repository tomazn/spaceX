import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RocketsProvider } from '../../providers/rockets/rockets';
import { RocketsDetailsComponent } from '../../components/rockets-details/rockets-details';
import { LaunchpadsProvider } from '../../providers/launchpads/launchpads';
import {LaunchesProvider} from '../../providers/launches/launches';
import {LaunchpadsDetailsComponent} from '../../components/launchpads-details/launchpads-details';

/**
 * Generated class for the HomeNextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-next',
  templateUrl: 'home-next.html',
})
export class HomeNextPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private LaunchpadsProvider: LaunchpadsProvider,
     private RocketsProvider: RocketsProvider, private LaunchesProvider: LaunchesProvider) {
  }

  nextLaunch: any;
  countdown: {
       days: number,
       hours: number,
       minutes: number,
       seconds: number
  }

  ionViewDidLoad() {
    this.getNextLaunch();
  }

  getNextLaunch(): void{
    this.LaunchesProvider.getLaunch("next")
    .then(res => {
      this.nextLaunch = res;
      this.countdownFn(res);
    },
  error => console.log(error));
  }

  countdownFn(res): void{
    let timestamp = res.launch_date_unix;
    timestamp /= 1000;
  setInterval(() => {
      timestamp--;

      this.countdown = {
        days: Math.floor(timestamp / (24 * 60 * 60)),
        hours: Math.floor(timestamp / (60 * 60)) % 24,
        minutes: Math.floor(timestamp / 60) % 60,
        seconds: Math.floor(timestamp / 1) % 60
      }
  }, 1000);
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

}
