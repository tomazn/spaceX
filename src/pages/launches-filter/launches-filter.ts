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
  launchesDate: String[];
  selectedLaunchDateFilter: String;
  SuccessLanches: String[];
  selectedSuccessLaunch: String;;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  initFilter(): void{
    this.SuccessLanches = ["all","true","false"];
    this.launchesDate = this.navParams.get('launchesDate');
    this.rocketsFilter = this.navParams.get('rocketsFilter');
    this.selectedRocketsFilter = this.navParams.get('selectedRocketsFilter') ? this.navParams.get('selectedRocketsFilter') : this.navParams.get('rocketsFilter')[0];
    this.selectedLaunchDateFilter = this.navParams.get('selectedLaunchDateFilter') ? this.navParams.get('selectedLaunchDateFilter') : this.navParams.get('launchesDate')[0];
    this.selectedSuccessLaunch = this.navParams.get('selectedSuccessLaunch') ? this.navParams.get('selectedSuccessLaunch') : this.SuccessLanches[0];
  }

  ionViewDidEnter(){
    this.initFilter();
  }

  closeModalFilter(): void {
    this.selectedRocketsFilter = null;
    this.selectedLaunchDateFilter = null;
    this.selectedSuccessLaunch = "";
    this.viewCtrl.dismiss(null);
  }

  selectRocket(rocket: String): void{
    this.selectedRocketsFilter = rocket;
  }

  selectedSuccessLaunchFn(SuccessLaunch: String): void{
    this.selectedSuccessLaunch = SuccessLaunch;
  }

  submitFilterFn(): void{
    this.viewCtrl.dismiss({
      selectedRocketsFilter: this.selectedRocketsFilter,
      selectedLaunchDateFilter: this.selectedLaunchDateFilter,
      selectedSuccessLaunch: this.selectedSuccessLaunch
    });
  }
}
