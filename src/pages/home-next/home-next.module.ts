import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNextPage } from './home-next';

@NgModule({
  declarations: [
    HomeNextPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNextPage),
  ],
})
export class HomeNextPageModule {}
