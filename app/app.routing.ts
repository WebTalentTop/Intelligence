import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './angular/home/home.component';
import { LoginComponent } from './angular/login/login.component';
import { PricingComponent } from './angular/login/pricing.component';
import { SignUpComponent } from './angular/onboarding/signup.component';
import { OnboardingComponent } from './angular/onboarding/onboarding.component';

import { CompanyComponent } from './angular/onboarding/company.component';

import { DataComponent } from './angular/data/data.component';
import { NvdComponent } from './angular/ng2nvd3/nvd.component';
//import { NgxChartsDemoComponent } from './angular/ngxdemo/ngx.component';
import { ConnectionsComponent } from './angular/connections/connections.component';

import { TeamComponent } from './angular/team/team.component';
import { AddBranchMobile } from './angular/team/mobileadmin.component';
import { CreateUserMobile } from './angular/team/mobileadmin.component';
import { AddGroupMobile } from './angular/team/mobileadmin.component';
import { ArchiveBranchMobile } from './angular/team/mobileadmin.component';
import { ArchiveGroupMobile } from './angular/team/mobileadmin.component';
import { AddUserMobile } from './angular/team/mobileadmin.component';
import { RemoveUserMobile } from './angular/team/mobileadmin.component';

import { BillingComponent } from './angular/team/billing.component';
import { HelpComponent } from './angular/help/help.component';
import { FeedbackComponent } from './angular/feedback/feedback.component';
import { MarketplaceComponent } from './angular/marketplace/marketplace.component';

import { AccountComponent } from './angular/account/account.component';

import { ContactUsComponent } from './angular/legal/contact.component';
import { PrivacyPolicyComponent } from './angular/legal/privacy.component';
import { TermsComponent } from './angular/legal/terms.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path: 'ng2nvd3',
    component: NvdComponent
  },
  // {
  //   path: 'ngxdemo',
  //   component: NgxChartsDemoComponent
  // },
  {
    path: 'data/:view',
    component: DataComponent
  },
  {
    path: 'connectors',
    component: ConnectionsComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'newBranch',
    component: AddBranchMobile
  },
  {
    path: 'createUser',
    component: CreateUserMobile
  },
  {
    path: 'addGroup',
    component: AddGroupMobile
  },
  {
    path: 'archiveGroup/:id',
    component: ArchiveGroupMobile
  },
  {
    path: 'archiveBranch/:id',
    component: ArchiveBranchMobile

  },
  {
    path: 'addUser/:id',
    component: AddUserMobile
  },
  {
    path: 'removeUser/:id/:user',
    component: RemoveUserMobile
  },
  {
    path: 'onboard',
    component: OnboardingComponent
  }

];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });
export const routedComponents = [HomeComponent, LoginComponent, SignUpComponent, PricingComponent, CompanyComponent, DataComponent, NvdComponent, ConnectionsComponent, TeamComponent, HelpComponent, FeedbackComponent, MarketplaceComponent, ContactUsComponent, PrivacyPolicyComponent, TermsComponent];
