import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { CoresComponent } from './cores/cores';
import { CoresDetailsComponent } from './cores-details/cores-details';
import { RocketsComponent } from './rockets/rockets';
import { RocketsProvider } from '../providers/rockets/rockets';
import { RocketsDetailsComponent } from './rockets-details/rockets-details';

@NgModule({
	declarations: [CompanyComponent,
    CoresComponent,
    CoresDetailsComponent],
    RocketsComponent,
    RocketsDetailsComponent],
	imports: [],
	exports: [CompanyComponent,
    CoresComponent,
    CoresDetailsComponent],
    RocketsComponent,
    RocketsDetailsComponent],
	providers: [
		CompanyProvider,
		RocketsProvider
	]
})
export class ComponentsModule {}
