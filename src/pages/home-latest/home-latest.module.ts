import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeLatestPage } from './home-latest';

@NgModule({
  declarations: [
    HomeLatestPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeLatestPage),
  ],
})
export class HomeLatestPageModule {}
