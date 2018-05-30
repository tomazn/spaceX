import { Component } from '@angular/core';
import { CoresProvider } from '../../providers/cores/cores';

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

  constructor(private coresPrivder: CoresProvider) {
    let query = "";
    this.getRockets(query);
  }

  getRockets(query): void{
    this.coresPrivder.getCores(query)
    .then(
      res => this.coresList = res,
      error => console.log(error)
    )
  }

}
