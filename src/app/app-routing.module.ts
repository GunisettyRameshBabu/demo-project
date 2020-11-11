import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {AppListingComponent} from './app-listing/app-listing.component';
import {SingleAppComponent} from './single-app/single-app.component';

const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'appListing', component: AppListingComponent},
    {path: 'singleApp', component: SingleAppComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
