import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { LaunchpadsComponent } from './launchpads/launchpads';

@NgModule({
	declarations: [CompanyComponent,
    LaunchpadsComponent],
	imports: [],
	exports: [CompanyComponent,
    LaunchpadsComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
