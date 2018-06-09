import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { CapsulesComponent } from './capsules/capsules';
import { CapsulesProvider } from '../providers/capsules/capsules';

@NgModule({
	declarations: [CompanyComponent,
    CapsulesComponent],
	imports: [],
	exports: [CompanyComponent,
    CapsulesComponent],
	providers: [
		CompanyProvider,
		CapsulesProvider
	]
})
export class ComponentsModule {}
