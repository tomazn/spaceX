import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { LaunchesComponent } from './launches/launches';

@NgModule({
	declarations: [CompanyComponent,
    LaunchesComponent],
	imports: [],
	exports: [CompanyComponent,
    LaunchesComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
