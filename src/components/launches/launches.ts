import { Component } from '@angular/core';
import { LaunchesProvider } from '../../providers/launches/launches';
import { LaunchesDetailsComponent } from '../launches-details/launches-details';
import { NavController, ModalController } from 'ionic-angular';
import { LaunchesFilterPage } from '../../pages/launches-filter/launches-filter';

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
  launchesCopy: any[];
  loadLaunches: boolean = false;
  launchesSearch: string;
  rocketsFilter: String[] = ["all"];
  launchesDate: String[] = ["all"];
  stats : {
    total: number,
    success: number,
    reuseCore: number,
    reuseCapsule: number
  }

  //Filters
  selectedRocketsFilter: String;
  selectedLaunchDateFilter: String;
  selectedSuccessLaunch: String;

  constructor(private launchesProvider: LaunchesProvider, private navCtrl: NavController, public modalCtrl: ModalController) {
    this.getLaunches();
  }

  getLaunches(): void {
    this.loadLaunches = true;
    this.launchesProvider.getLaunches()
      .then(res => {
          this.launches = res;
          this.getRocketsFilter();
          this.getRangeDate();
          this.getStats();
          this.launchesCopy = res;
          this.loadLaunches = false;
        },
        error => console.log(error));
  }

  navLaunchDetails(Launch: any): void {
    this.navCtrl.push(LaunchesDetailsComponent, Launch);
  }

  onInput(event: Event): void {
    this.launches = this.launchesCopy;
    let filteredLaunches = [];
    for (let launch of this.launches) {
      if (launch.mission_name.toLowerCase().includes(this.launchesSearch.toLowerCase())) {
        filteredLaunches.push(launch);
      }
    }
    this.launches = filteredLaunches;
  }

  openModalFilter(): void {
    const modal = this.modalCtrl.create(LaunchesFilterPage, {
      rocketsFilter: this.rocketsFilter,
      launchesDate: this.launchesDate,
      //Selected value
      selectedRocketsFilter: this.selectedRocketsFilter,
      selectedLaunchDateFilter: this.selectedLaunchDateFilter,
      selectedSuccessLaunch: this.selectedSuccessLaunch
    });
    modal.onDidDismiss(data => {
      if (!data) {
        return false;
      }
      this.selectedRocketsFilter = data.selectedRocketsFilter;
      this.selectedLaunchDateFilter = data.selectedLaunchDateFilter;
      this.selectedSuccessLaunch = data.selectedSuccessLaunch;
    });

    modal.present();
  }

  getRocketsFilter(): void {
    for (let launch of this.launches) {
      if (this.rocketsFilter.indexOf(launch.rocket.rocket_name) < 0) {
        this.rocketsFilter.push(launch.rocket.rocket_name);
      }
    }
  }

  getRangeDate(): void {
    for (let launch of this.launches) {
      if (this.launchesDate.indexOf(launch.launch_year) < 0) {
        this.launchesDate.push(launch.launch_year);
      }
    }
  }

  getStats(): void{

    let total = this.launches.length;
    let success = 0;
    let reuseCore = 0;
    let reuseCapsule = 0;

    for(let launch of this.launches){
        if(launch.launch_success){
          success++;
        }
        if(launch.reuse.core){
          reuseCore++;
        }
        if(launch.reuse.capsule){
          reuseCapsule++;
        }
    }

    this.stats = {
      total: total,
      success: success,
      reuseCore: reuseCore,
      reuseCapsule: reuseCapsule
    }
  }
}
