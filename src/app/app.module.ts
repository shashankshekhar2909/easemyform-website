import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';
import { HeaderComponent } from './_components/_partials/header/header.component';
import { FooterComponent } from './_components/_partials/footer/footer.component';
import { TcComponent } from './_components/tc/tc.component';
import { PricingComponent } from './_components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './_components/privacy-policy/privacy-policy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { JobsComponent } from './_components/jobs/jobs.component';
import { ResumeComponent } from './_components/resume/resume.component';
import { LinkedinComponent } from './_components/linkedin/linkedin.component';
import { RefundComponent } from './_components/refund/refund.component';
import { AboutComponent } from './_components/about/about.component';
import { JobPostsComponent } from './_components/job-posts/job-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './_components/job-list/job-list.component';
import { TextSlicePipe } from './text-slice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TcComponent,
    PricingComponent,
    PrivacyPolicyComponent,
    JobsComponent,
    ResumeComponent,
    LinkedinComponent,
    RefundComponent,
    AboutComponent,
    JobPostsComponent,
    JobListComponent,
    TextSlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
