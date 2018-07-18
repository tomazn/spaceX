import { Component } from '@angular/core';
import {HomeLatestPage} from '../../pages/home-latest/home-latest';
import {HomeNextPage} from '../../pages/home-next/home-next';

/**
 * Generated class for the HomePageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-page',
  templateUrl: 'home-page.html'
})
export class HomePageComponent {

  latest: any;
  next: any;

  constructor() {
      this.latest = HomeLatestPage;
      this.next = HomeNextPage;
  }

}
