import { Component } from '@angular/core';
import { RocketsProvider } from '../../providers/rockets/rockets';
import { RocketsDetailsComponent } from '../rockets-details/rockets-details';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the RocketsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'rockets',
  templateUrl: 'rockets.html'
})
export class RocketsComponent {

  private rocketsList: any[];
  private loadRockets : boolean = false;

  constructor(private RocketsProvider: RocketsProvider, private navCtrl: NavController) {
    this.getRockets();
  }

  getRockets(): void {
    this.loadRockets = true;
    this.RocketsProvider.getRockets()
    .then(
      res => {
        this.rocketsList = res,
        this.setImg();
        this.loadRockets = false;
      },
      error => console.log(error)
    )
  }

setImg(): void {
  for(let rocket of this.rocketsList){
    rocket.img = rocket.id + ".jpg";
  }
}

navRocketDetails(Rocket : any): void{ 
  this.navCtrl.push(RocketsDetailsComponent, Rocket); 
} 

}
