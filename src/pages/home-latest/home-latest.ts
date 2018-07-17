import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LaunchesProvider} from '../../providers/launches/launches';
import {RocketsDetailsComponent} from "../../components/rockets-details/rockets-details";
import {RocketsProvider} from "../../providers/rockets/rockets";


/**
 * Generated class for the HomeLatestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-latest',
  templateUrl: 'home-latest.html',
})
export class HomeLatestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public LaunchesProvider: LaunchesProvider, public RocketsProvider: RocketsProvider) {
  }

  latestLaunch: any;

  ionViewDidLoad() {
    this.getLatestLaunch();
  }

  getLatestLaunch(): void{
    this.LaunchesProvider.getLaunch("latest")
    .then(res => {
        this.latestLaunch = res;
        console.log(this.latestLaunch);
    },
  error => console.log(error));
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

}
