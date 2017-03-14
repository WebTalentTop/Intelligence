import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule, JsonpModule } from '@angular/http';
import { CovalentCoreModule } from '@covalent/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './angular/home/home.component';
import { AnimationComponent } from './angular/home/animation.component';
import { LoginComponent } from './angular/login/login.component';
import { SignUpComponent } from './angular/onboarding/signup.component';
import { PricingComponent } from './angular/login/pricing.component';
import { OnboardingComponent } from './angular/onboarding/onboarding.component';
import { BillingInfoComponent } from './angular/onboarding/billinginfo.component';
import { CompanyComponent } from './angular/onboarding/company.component';
import { MiniMarketplaceComponent } from './angular/onboarding/mini-marketplace.component';
import { DataComponent } from './angular/data/data.component';
import { NvdComponent } from './angular/ng2nvd3/nvd.component';
import { NgxChartsDemoComponent } from './angular/ngxdemo/ngx.component';
//import {nvD3} from 'ng2-nvd3';
import {BarVerticalComponent} from './angular/src/bar-chart/bar-vertical.component';
import { ConnectionsComponent } from './angular/connections/connections.component';
import { TeamComponent } from './angular/team/team.component';
import { BillingComponent } from './angular/team/billing.component';
import { AdminComponent } from './angular/team/admin.component';
import { ApprovalComponent } from './angular/team/approval.component';
import { ApprovalDialog } from './angular/team/approval.component';
import { AddGroupDialog } from './angular/team/admin.component';
import { AddBranchDialog } from './angular/team/admin.component';
import { ArchiveGroupDialog } from './angular/team/admin.component';
import { ArchiveBranchDialog } from './angular/team/admin.component';
import { AddUserDialog } from './angular/team/admin.component';
import { RemoveUserDialog } from './angular/team/admin.component';
import { CreateUserDialog } from './angular/team/admin.component';
import { AddBranchMobile } from './angular/team/mobileadmin.component';
import { CreateUserMobile } from './angular/team/mobileadmin.component';
import { ArchiveGroupMobile } from './angular/team/mobileadmin.component';
import { ArchiveBranchMobile } from './angular/team/mobileadmin.component';
import { AddGroupMobile } from './angular/team/mobileadmin.component';
import { AddUserMobile } from './angular/team/mobileadmin.component';
import { RemoveUserMobile } from './angular/team/mobileadmin.component';
import { GroupsComponent } from './angular/team/groups.component';
import { HelpComponent } from './angular/help/help.component';
import { FeedbackComponent } from './angular/feedback/feedback.component';
import { MarketplaceComponent } from './angular/marketplace/marketplace.component';
import { VisionComponent } from './angular/marketplace/vision.component';
import { GoogleAnalyticsComponent } from './angular/marketplace/googleanalytics.component';
import { WooComponent } from './angular/marketplace/woo.component';
import { ZohoComponent } from './angular/marketplace/zoho.component';
import { QuickbooksComponent } from './angular/marketplace/quickbooks.component';
import { DentrixComponent } from './angular/marketplace/dentrix.component';
import { ContactUsComponent } from './angular/legal/contact.component';
import { PrivacyPolicyComponent } from './angular/legal/privacy.component';
import { TermsComponent } from './angular/legal/terms.component';
import { AccountComponent } from './angular/account/account.component';
import { SidebarComponent } from './angular/sidebar/sidebar.component';
import { HeaderMainComponent } from './angular/common/header-main.component';
import { HeaderHomeComponent } from './angular/common/header-home.component';
import { ToastComponent } from './angular/toast/toast.component';
import { HeaderLegalComponent } from './angular/legal/header-legal.component';
import { FooterComponent } from './angular/common/footer.component';
import { SafePipe } from './angular/shared/safe.pipe';
import { ToolbarDropdownComponent } from './angular/common/toolbar-dropdown.component';
import { routing, routedComponents } from './app.routing';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';


let options: ToastOptions = new ToastOptions({
  animate: 'flyRight',
  positionClass: 'toast-top-right',
});

//Include all modules here
@NgModule({
    imports: [
        HttpModule,
        JsonpModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        //CovalentCoreModule.forRoot(),
        // FlexLayoutModule.forRoot(),
        // "@angular/flex-layout": "^2.0.0-beta.0",
        routing,
		    ToastModule.forRoot(options)
    ],


    //Declare components here
    declarations: [
        AppComponent,
        HomeComponent,
        AnimationComponent,
        LoginComponent,
        SignUpComponent,
        PricingComponent,
        OnboardingComponent,
        MiniMarketplaceComponent,
        BillingInfoComponent,
        CompanyComponent,
        HeaderLegalComponent,
        HeaderHomeComponent,
        HeaderMainComponent,
		    ToastComponent,
        DataComponent,
        NvdComponent,
       NgxChartsDemoComponent,
       BarVerticalComponent,
      //nvD3,
        ConnectionsComponent,
        TeamComponent,
        AdminComponent,
        ApprovalComponent,
        ApprovalDialog,
        AddGroupDialog,
        AddBranchDialog,
        ArchiveGroupDialog,
        ArchiveBranchDialog,
        AddUserDialog,
        RemoveUserDialog,
        CreateUserDialog,
        AddBranchMobile,
        CreateUserMobile,
        ArchiveGroupMobile,
        ArchiveBranchMobile,
        AddGroupMobile,
        AddUserMobile,
        RemoveUserMobile,
        GroupsComponent,
        HelpComponent,
        FeedbackComponent,
        MarketplaceComponent,
        VisionComponent,
        GoogleAnalyticsComponent,
        WooComponent,
        ZohoComponent,
        QuickbooksComponent,
        DentrixComponent,
        AccountComponent,
        BillingComponent,
        SidebarComponent,
        FooterComponent,
        ContactUsComponent,
        PrivacyPolicyComponent,
        ToolbarDropdownComponent,
        TermsComponent,
        SafePipe

    ],
    entryComponents: [
      ApprovalDialog,
      AddGroupDialog,
      AddBranchDialog,
      ArchiveGroupDialog,
      ArchiveBranchDialog,
      AddUserDialog,
      RemoveUserDialog,
      CreateUserDialog
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class AppModule {
    constructor(

    ) { }
}
