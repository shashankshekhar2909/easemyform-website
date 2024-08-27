import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { PricingComponent } from './_components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './_components/privacy-policy/privacy-policy.component';
import { JobsComponent } from './_components/jobs/jobs.component';
import { TcComponent } from './_components/tc/tc.component';
import { ResumeComponent } from './_components/resume/resume.component';
import { LinkedinComponent } from './_components/linkedin/linkedin.component';
import { RefundComponent } from './_components/refund/refund.component';
import { AboutComponent } from './_components/about/about.component';
import { JobPostsComponent } from './_components/job-posts/job-posts.component';
import { JobListComponent } from './_components/job-list/job-list.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    title:'Home'
  },
  {
    path:'pricing',
    component:PricingComponent,
    title:'Pricing'
  },
  {
    path:'jobs',
    component:JobsComponent,
    title:'Jobs'
  },
  {
    path:'resume',
    component:ResumeComponent,
    title:'Resume'
  },
  {
    path:'linkedin-optimization',
    component:LinkedinComponent,
    title:'Resume'
  },
  {
    path:'privacy-policy',
    component:PrivacyPolicyComponent,
    title:'Privacy Policy'
  },
  {
    path:'terms-&-conditions',
    component:TcComponent,
    title:'Terms & Condition'
  },
  {
    path:'refund-policy',
    component:RefundComponent,
    title:'Cancellation and Refund Policy'
  },
  {
    path:'about-us',
    component:AboutComponent,
    title:'About Us'
  },
  {
    path:'job-list',
    component:JobListComponent,
    title:'Job List'
  },
  {
    path:'job',
    component:JobPostsComponent,
    title:'Jobs'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
