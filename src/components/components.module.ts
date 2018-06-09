import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { RocketsComponent } from './rockets/rockets';
import { RocketsProvider } from '../providers/rockets/rockets';

@NgModule({
	declarations: [CompanyComponent,
    RocketsComponent],
	imports: [],
	exports: [CompanyComponent,
    RocketsComponent],
	providers: [
		CompanyProvider,
		RocketsProvider
	]
})
export class ComponentsModule {}
