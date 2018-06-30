import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the LaunchesFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launches-filter',
  templateUrl: 'launches-filter.html',
})
export class LaunchesFilterPage {

  rocketsFilter: String[];
  selectedRocketsFilter: String;
  launchesDate: {
    lower : number,
    upper: number
  }
  selectedLaunchDateFilter: String;
  successLaunches: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  initFilter(): void{
    this.successLaunches = false;
    this.launchesDate = this.navParams.get('launchesDate');
    this.rocketsFilter = this.navParams.get('rocketsFilter');
    this.selectedRocketsFilter = this.navParams.get('rocketsFilter')[0];
    this.selectedLaunchDateFilter = this.navParams.get('launchesDate')[0];
  }

  ionViewDidEnter(){
    this.initFilter();
  }

  closeModalFilter(): void {
    this.selectedRocketsFilter = null;
    this.selectedLaunchDateFilter = null;
    this.successLaunches = null;
    this.viewCtrl.dismiss(null);
  }

  selectRocket(rocket: String): void{
    this.selectedRocketsFilter = rocket;
  }

  submitFilterFn(): void{
    this.viewCtrl.dismiss({
      selectedRocketsFilter: this.selectedRocketsFilter,
      selectedLaunchDateFilter: this.selectedLaunchDateFilter,
      successLaunches: this.successLaunches
    });
  }
}
