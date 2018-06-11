import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { CoresComponent } from './cores/cores';
import { CoresDetailsComponent } from './cores-details/cores-details';

@NgModule({
	declarations: [CompanyComponent,
    CoresComponent,
    CoresDetailsComponent],
	imports: [],
	exports: [CompanyComponent,
    CoresComponent,
    CoresDetailsComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
