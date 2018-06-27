import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { LaunchesComponent } from './launches/launches';
import { LaunchesDetailsComponent } from './launches-details/launches-details';

@NgModule({
	declarations: [CompanyComponent,
    LaunchesComponent,
    LaunchesDetailsComponent],
	imports: [],
	exports: [CompanyComponent,
    LaunchesComponent,
    LaunchesDetailsComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
