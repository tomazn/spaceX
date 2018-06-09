import { Component } from '@angular/core';
import { RocketsProvider } from '../../providers/rockets/rockets';

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

  constructor(private RocketsProvider: RocketsProvider) {
    this.getRockets();
  }

  getRockets(): void {
    this.RocketsProvider.getRockets()
    .then(
      res => {
        this.rocketsList = res,
        this.setImg();
      },
      error => console.log(error)
    )
  }

setImg(): void {
  for(let rocket of this.rocketsList){
    rocket.img = rocket.id + ".jpg";
  }
}

}
