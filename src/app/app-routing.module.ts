import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import { PricingComponent } from './_components/pricing/pricing.component';
import { PrivacyPolicyComponent } from './_components/privacy-policy/privacy-policy.component';
import { JobsComponent } from './_components/jobs/jobs.component';
import { TcComponent } from './_components/tc/tc.component';
import { ResumeComponent } from './_components/resume/resume.component';
import { LinkedinComponent } from './_components/linkedin/linkedin.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
