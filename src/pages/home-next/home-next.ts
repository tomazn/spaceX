import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LaunchesProvider} from '../../providers/launches/launches';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private LaunchesProvider: LaunchesProvider) {
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

}
