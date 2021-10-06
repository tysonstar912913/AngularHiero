import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IntrobannerComponent } from './introbanner/introbanner.component';
import { JobcategoriesComponent } from './jobcategories/jobcategories.component';
import { FeaturedjobsComponent } from './featuredjobs/featuredjobs.component';
import { FeaturedcitiesComponent } from './featuredcities/featuredcities.component';
import { FreelancerlistComponent } from './freelancerlist/freelancerlist.component';
import { MembershipplanComponent } from './membershipplan/membershipplan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IntrobannerComponent,
    JobcategoriesComponent,
    FeaturedjobsComponent,
    FeaturedcitiesComponent,
    FreelancerlistComponent,
    MembershipplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
