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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  initRocketFilter(): void{
    this.rocketsFilter = this.navParams.get('rocketsFilter');
    this.selectedRocketsFilter = this.navParams.get('rocketsFilter')[0];
    console.log(this.rocketsFilter);
    console.log(this.selectedRocketsFilter);
  }

  ionViewDidLoad() {
    this.initRocketFilter();
  }

  closeModalFilter(): void {
    this.viewCtrl.dismiss();
  }

  selectRocket(rocket: String): void{
    this.selectedRocketsFilter = rocket;
  }
}
