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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompanyComponent,
    CoresComponent,
    CoresDetailsComponent
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
    CoresComponent,
    CoresDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CompanyProvider,
    RocketsProvider,
    CapsulesProvider,
    LaunchpadsProvider,
    CoresProvider
  ]
})
export class AppModule {}
