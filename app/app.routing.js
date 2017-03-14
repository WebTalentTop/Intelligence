"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./angular/home/home.component");
var login_component_1 = require("./angular/login/login.component");
var pricing_component_1 = require("./angular/login/pricing.component");
var signup_component_1 = require("./angular/onboarding/signup.component");
var onboarding_component_1 = require("./angular/onboarding/onboarding.component");
var company_component_1 = require("./angular/onboarding/company.component");
var data_component_1 = require("./angular/data/data.component");
var nvd_component_1 = require("./angular/ng2nvd3/nvd.component");
//import { NgxChartsDemoComponent } from './angular/ngxdemo/ngx.component';
var connections_component_1 = require("./angular/connections/connections.component");
var team_component_1 = require("./angular/team/team.component");
var mobileadmin_component_1 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_2 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_3 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_4 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_5 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_6 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_7 = require("./angular/team/mobileadmin.component");
var billing_component_1 = require("./angular/team/billing.component");
var help_component_1 = require("./angular/help/help.component");
var feedback_component_1 = require("./angular/feedback/feedback.component");
var marketplace_component_1 = require("./angular/marketplace/marketplace.component");
var account_component_1 = require("./angular/account/account.component");
var contact_component_1 = require("./angular/legal/contact.component");
var privacy_component_1 = require("./angular/legal/privacy.component");
var terms_component_1 = require("./angular/legal/terms.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    },
    {
        path: 'pricing',
        component: pricing_component_1.PricingComponent
    },
    {
        path: 'company',
        component: company_component_1.CompanyComponent
    },
    {
        path: 'data',
        component: data_component_1.DataComponent
    },
    {
        path: 'ng2nvd3',
        component: nvd_component_1.NvdComponent
    },
    // {
    //   path: 'ngxdemo',
    //   component: NgxChartsDemoComponent
    // },
    {
        path: 'data/:view',
        component: data_component_1.DataComponent
    },
    {
        path: 'connectors',
        component: connections_component_1.ConnectionsComponent
    },
    {
        path: 'team',
        component: team_component_1.TeamComponent
    },
    {
        path: 'help',
        component: help_component_1.HelpComponent
    },
    {
        path: 'feedback',
        component: feedback_component_1.FeedbackComponent
    },
    {
        path: 'marketplace',
        component: marketplace_component_1.MarketplaceComponent
    },
    {
        path: 'account',
        component: account_component_1.AccountComponent
    },
    {
        path: 'billing',
        component: billing_component_1.BillingComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactUsComponent
    },
    {
        path: 'privacy',
        component: privacy_component_1.PrivacyPolicyComponent
    },
    {
        path: 'terms',
        component: terms_component_1.TermsComponent
    },
    {
        path: 'newBranch',
        component: mobileadmin_component_1.AddBranchMobile
    },
    {
        path: 'createUser',
        component: mobileadmin_component_2.CreateUserMobile
    },
    {
        path: 'addGroup',
        component: mobileadmin_component_3.AddGroupMobile
    },
    {
        path: 'archiveGroup/:id',
        component: mobileadmin_component_5.ArchiveGroupMobile
    },
    {
        path: 'archiveBranch/:id',
        component: mobileadmin_component_4.ArchiveBranchMobile
    },
    {
        path: 'addUser/:id',
        component: mobileadmin_component_6.AddUserMobile
    },
    {
        path: 'removeUser/:id/:user',
        component: mobileadmin_component_7.RemoveUserMobile
    },
    {
        path: 'onboard',
        component: onboarding_component_1.OnboardingComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: false });
exports.routedComponents = [home_component_1.HomeComponent, login_component_1.LoginComponent, signup_component_1.SignUpComponent, pricing_component_1.PricingComponent, company_component_1.CompanyComponent, data_component_1.DataComponent, nvd_component_1.NvdComponent, connections_component_1.ConnectionsComponent, team_component_1.TeamComponent, help_component_1.HelpComponent, feedback_component_1.FeedbackComponent, marketplace_component_1.MarketplaceComponent, contact_component_1.ContactUsComponent, privacy_component_1.PrivacyPolicyComponent, terms_component_1.TermsComponent];
//# sourceMappingURL=app.routing.js.map