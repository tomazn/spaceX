import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { LaunchesComponent } from './launches/launches';
import { LaunchesDetailsComponent } from './launches-details/launches-details';

import { CoresComponent } from './cores/cores';
import { CoresDetailsComponent } from './cores-details/cores-details';
import { RocketsComponent } from './rockets/rockets';
import { RocketsProvider } from '../providers/rockets/rockets';
import { RocketsDetailsComponent } from './rockets-details/rockets-details';
import { CapsulesComponent } from './capsules/capsules';
import { CapsulesProvider } from '../providers/capsules/capsules';
import { CapsulesDetailsComponent } from './capsules-details/capsules-details';
import { LaunchpadsComponent } from './launchpads/launchpads';
import { LaunchpadsDetailsComponent } from './launchpads-details/launchpads-details';

@NgModule({
	declarations: [CompanyComponent,
    CoresComponent,
    CoresDetailsComponent,
    RocketsComponent,
    RocketsDetailsComponent,
    CapsulesComponent,
    CapsulesDetailsComponent,
    LaunchpadsComponent,
    LaunchpadsDetailsComponent,
    LaunchesComponent,
    LaunchesDetailsComponent],
	imports: [],
	exports: [CompanyComponent,
    CoresComponent,
    CoresDetailsComponent,
    RocketsComponent,
    RocketsDetailsComponent,
    CapsulesComponent,
    CapsulesDetailsComponent,
    LaunchpadsComponent,
    LaunchpadsDetailsComponent,
    LaunchesComponent,
    LaunchesDetailsComponent],
	providers: [
		CompanyProvider,
		RocketsProvider,
		CapsulesProvider
	]
})
export class ComponentsModule {}
