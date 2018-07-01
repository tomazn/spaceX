import { NgModule } from '@angular/core';
import { CompanyComponent } from './company/company';
import { CompanyProvider } from '../providers/company/company';
import { HomePageComponent } from './home-page/home-page';

@NgModule({
	declarations: [CompanyComponent,
    HomePageComponent],
	imports: [],
	exports: [CompanyComponent,
    HomePageComponent],
	providers: [
		CompanyProvider
	]
})
export class ComponentsModule {}
