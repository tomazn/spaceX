import { Component } from '@angular/core';
import { CapsulesProvider } from '../../providers/capsules/capsules';

/**
 * Generated class for the CapsulesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'capsules',
  templateUrl: 'capsules.html'
})
export class CapsulesComponent {

  capsulesList : any[];

  constructor(private CapsulesProvider : CapsulesProvider) {
    this.getCapsules();
  }

  getCapsules(): void {
    this.CapsulesProvider.getCapsules()
    .then(
      res => {
        this.capsulesList = res,
        this.setImg();
      },
      error => console.log(error)
    )
  }

  setImg(): void {
    for(let capsule of this.capsulesList){
      capsule.img = capsule.id + ".jpg";
    }
  }
}
