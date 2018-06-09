import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { RocketsComponent } from './rockets/rockets';
import { RocketsProvider } from '../providers/rockets/rockets';
import { RocketsDetailsComponent } from './rockets-details/rockets-details';

@NgModule({
	declarations: [CompanyComponent,
    RocketsComponent,
    RocketsDetailsComponent],
	imports: [],
	exports: [CompanyComponent,
    RocketsComponent,
    RocketsDetailsComponent],
	providers: [
		CompanyProvider,
		RocketsProvider
	]
})
export class ComponentsModule {}
