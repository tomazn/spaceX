import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';

@NgModule({
	declarations: [CompanyComponent],
	imports: [],
	exports: [CompanyComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
