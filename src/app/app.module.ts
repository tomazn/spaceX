import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CompanyComponent } from '../components/company/company';
import { CoresComponent } from '../components/cores/cores';
import { CoresDetailsComponent } from '../components/cores-details/cores-details';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompanyProvider } from '../providers/company/company';
import { HttpClientModule } from '@angular/common/http';
import { RocketsProvider } from '../providers/rockets/rockets';
import { CapsulesProvider } from '../providers/capsules/capsules';
import { LaunchpadsProvider } from '../providers/launchpads/launchpads';
import { CoresProvider } from '../providers/cores/cores';
import { LaunchesProvider } from '../providers/launches/launches';

import { LaunchesComponent } from '../components/launches/launches';
import { LaunchesDetailsComponent } from '../components/launches-details/launches-details';
import { RocketsComponent } from '../components/rockets/rockets';
import { RocketsDetailsComponent } from '../components/rockets-details/rockets-details';
import { CapsulesComponent } from '../components/capsules/capsules';
import { CapsulesDetailsComponent } from '../components/capsules-details/capsules-details';
import { LaunchpadsComponent } from '../components/launchpads/launchpads';
import { LaunchpadsDetailsComponent } from '../components/launchpads-details/launchpads-details';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompanyComponent,
    LaunchesComponent,
    LaunchesDetailsComponent,
    RocketsComponent,
    RocketsDetailsComponent,
    CoresComponent,
    CoresDetailsComponent,
    CapsulesComponent,
    CapsulesDetailsComponent,
    LaunchpadsComponent,
    LaunchpadsDetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CompanyComponent,
    LaunchesComponent,
    LaunchesDetailsComponent,
    CoresComponent,
    CoresDetailsComponent,
    RocketsComponent,
    RocketsDetailsComponent,
    CapsulesComponent,
    CapsulesDetailsComponent,
    LaunchpadsComponent,
    LaunchpadsDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CompanyProvider,
    RocketsProvider,
    CapsulesProvider,
    LaunchpadsProvider,
    CoresProvider,
    LaunchesProvider
  ]
})
export class AppModule {}
