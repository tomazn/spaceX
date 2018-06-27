import { Component } from '@angular/core';
import { CoresProvider } from '../../providers/cores/cores';
import { CoresDetailsComponent } from '../cores-details/cores-details';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the CoresComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cores',
  templateUrl: 'cores.html'
})
export class CoresComponent {

  private coresList: any[];
  private loadCores: boolean = false;

  constructor(private coresPrivder: CoresProvider, public navCtrl: NavController) {
    let query = "";
    this.getRockets(query);
  }

  getRockets(query): void{
    this.loadCores = true;
    this.coresPrivder.getCores(query)
    .then(
      res => {
        this.coresList = res;
        this.loadCores = false;
      },
      error => console.log(error)
    )
  }

  navCoresDetails(Core : any): void{
    this.navCtrl.push(CoresDetailsComponent, Core);
  }

}
