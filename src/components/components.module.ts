import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { CapsulesComponent } from './capsules/capsules';
import { CapsulesProvider } from '../providers/capsules/capsules';
import { CapsulesDetailsComponent } from './capsules-details/capsules-details';

@NgModule({
	declarations: [CompanyComponent,
    CapsulesComponent,
    CapsulesDetailsComponent],
	imports: [],
	exports: [CompanyComponent,
    CapsulesComponent,
    CapsulesDetailsComponent],
	providers: [
		CompanyProvider,
		CapsulesProvider
	]
})
export class ComponentsModule {}
