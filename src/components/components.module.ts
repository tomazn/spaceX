import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { LaunchpadsComponent } from './launchpads/launchpads';
import { LaunchpadsDetailsComponent } from './launchpads-details/launchpads-details';

@NgModule({
	declarations: [CompanyComponent,
    LaunchpadsComponent,
    LaunchpadsDetailsComponent],
	imports: [],
	exports: [CompanyComponent,
    LaunchpadsComponent,
    LaunchpadsDetailsComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
