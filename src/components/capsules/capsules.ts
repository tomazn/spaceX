import { Component } from '@angular/core';
import { CapsulesProvider } from '../../providers/capsules/capsules';
import { CapsulesDetailsComponent } from '../capsules-details/capsules-details';
import { NavController } from 'ionic-angular';

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
  loadingCapsule : boolean = false;

  constructor(private CapsulesProvider : CapsulesProvider, private navCtrl: NavController) {
    this.getCapsules();
  }

  getCapsules(): void {
    this.loadingCapsule = true;
    this.CapsulesProvider.getCapsules()
    .then(
      res => {
        this.capsulesList = res,
        this.setImg();
        this.loadingCapsule = false;
      },
      error => console.log(error)
    )
  }

  setImg(): void {
    for(let capsule of this.capsulesList){
      capsule.img = capsule.id + ".jpg";
    }
  }

  navCapsuleDetails(Capsule : any): void{  
    this.navCtrl.push(CapsulesDetailsComponent, Capsule);  
  }
}
