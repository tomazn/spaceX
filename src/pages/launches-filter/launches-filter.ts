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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchesFilterPage');
  }

  closeModalFilter(): void {
    this.viewCtrl.dismiss();
  }

}
