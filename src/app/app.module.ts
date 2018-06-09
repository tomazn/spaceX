import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompanyProvider } from '../providers/company/company';
import { CompanyComponent } from '../components/company/company';
import { HttpClientModule } from '@angular/common/http';
import { RocketsProvider } from '../providers/rockets/rockets';
import { CapsulesProvider } from '../providers/capsules/capsules';
import { LaunchpadsProvider } from '../providers/launchpads/launchpads';
import { CoresProvider } from '../providers/cores/cores';
import { RocketsComponent } from '../components/rockets/rockets';
import { RocketsDetailsComponent } from '../components/rockets-details/rockets-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompanyComponent,
    RocketsComponent,
    RocketsDetailsComponent
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
    RocketsComponent,
    RocketsDetailsComponent
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
