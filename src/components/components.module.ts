import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { CoresComponent } from './cores/cores';

@NgModule({
	declarations: [CompanyComponent,
    CoresComponent],
	imports: [],
	exports: [CompanyComponent,
    CoresComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
