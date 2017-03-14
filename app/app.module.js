"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var material_1 = require("@angular/material");
// import { FlexLayoutModule } from '@angular/flex-layout';
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./angular/home/home.component");
var animation_component_1 = require("./angular/home/animation.component");
var login_component_1 = require("./angular/login/login.component");
var signup_component_1 = require("./angular/onboarding/signup.component");
var pricing_component_1 = require("./angular/login/pricing.component");
var onboarding_component_1 = require("./angular/onboarding/onboarding.component");
var billinginfo_component_1 = require("./angular/onboarding/billinginfo.component");
var company_component_1 = require("./angular/onboarding/company.component");
var mini_marketplace_component_1 = require("./angular/onboarding/mini-marketplace.component");
var data_component_1 = require("./angular/data/data.component");
var nvd_component_1 = require("./angular/ng2nvd3/nvd.component");
var ngx_component_1 = require("./angular/ngxdemo/ngx.component");
//import {nvD3} from 'ng2-nvd3';
var bar_vertical_component_1 = require("./angular/src/bar-chart/bar-vertical.component");
var connections_component_1 = require("./angular/connections/connections.component");
var team_component_1 = require("./angular/team/team.component");
var billing_component_1 = require("./angular/team/billing.component");
var admin_component_1 = require("./angular/team/admin.component");
var approval_component_1 = require("./angular/team/approval.component");
var approval_component_2 = require("./angular/team/approval.component");
var admin_component_2 = require("./angular/team/admin.component");
var admin_component_3 = require("./angular/team/admin.component");
var admin_component_4 = require("./angular/team/admin.component");
var admin_component_5 = require("./angular/team/admin.component");
var admin_component_6 = require("./angular/team/admin.component");
var admin_component_7 = require("./angular/team/admin.component");
var admin_component_8 = require("./angular/team/admin.component");
var mobileadmin_component_1 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_2 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_3 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_4 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_5 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_6 = require("./angular/team/mobileadmin.component");
var mobileadmin_component_7 = require("./angular/team/mobileadmin.component");
var groups_component_1 = require("./angular/team/groups.component");
var help_component_1 = require("./angular/help/help.component");
var feedback_component_1 = require("./angular/feedback/feedback.component");
var marketplace_component_1 = require("./angular/marketplace/marketplace.component");
var vision_component_1 = require("./angular/marketplace/vision.component");
var googleanalytics_component_1 = require("./angular/marketplace/googleanalytics.component");
var woo_component_1 = require("./angular/marketplace/woo.component");
var zoho_component_1 = require("./angular/marketplace/zoho.component");
var quickbooks_component_1 = require("./angular/marketplace/quickbooks.component");
var dentrix_component_1 = require("./angular/marketplace/dentrix.component");
var contact_component_1 = require("./angular/legal/contact.component");
var privacy_component_1 = require("./angular/legal/privacy.component");
var terms_component_1 = require("./angular/legal/terms.component");
var account_component_1 = require("./angular/account/account.component");
var sidebar_component_1 = require("./angular/sidebar/sidebar.component");
var header_main_component_1 = require("./angular/common/header-main.component");
var header_home_component_1 = require("./angular/common/header-home.component");
var toast_component_1 = require("./angular/toast/toast.component");
var header_legal_component_1 = require("./angular/legal/header-legal.component");
var footer_component_1 = require("./angular/common/footer.component");
var safe_pipe_1 = require("./angular/shared/safe.pipe");
var toolbar_dropdown_component_1 = require("./angular/common/toolbar-dropdown.component");
var app_routing_1 = require("./app.routing");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var options = new ng2_toastr_1.ToastOptions({
    animate: 'flyRight',
    positionClass: 'toast-top-right',
});
//Include all modules here
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            http_1.JsonpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            material_1.MaterialModule.forRoot(),
            //CovalentCoreModule.forRoot(),
            // FlexLayoutModule.forRoot(),
            // "@angular/flex-layout": "^2.0.0-beta.0",
            app_routing_1.routing,
            ng2_toastr_1.ToastModule.forRoot(options)
        ],
        //Declare components here
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            animation_component_1.AnimationComponent,
            login_component_1.LoginComponent,
            signup_component_1.SignUpComponent,
            pricing_component_1.PricingComponent,
            onboarding_component_1.OnboardingComponent,
            mini_marketplace_component_1.MiniMarketplaceComponent,
            billinginfo_component_1.BillingInfoComponent,
            company_component_1.CompanyComponent,
            header_legal_component_1.HeaderLegalComponent,
            header_home_component_1.HeaderHomeComponent,
            header_main_component_1.HeaderMainComponent,
            toast_component_1.ToastComponent,
            data_component_1.DataComponent,
            nvd_component_1.NvdComponent,
            ngx_component_1.NgxChartsDemoComponent,
            bar_vertical_component_1.BarVerticalComponent,
            //nvD3,
            connections_component_1.ConnectionsComponent,
            team_component_1.TeamComponent,
            admin_component_1.AdminComponent,
            approval_component_1.ApprovalComponent,
            approval_component_2.ApprovalDialog,
            admin_component_2.AddGroupDialog,
            admin_component_3.AddBranchDialog,
            admin_component_4.ArchiveGroupDialog,
            admin_component_5.ArchiveBranchDialog,
            admin_component_6.AddUserDialog,
            admin_component_7.RemoveUserDialog,
            admin_component_8.CreateUserDialog,
            mobileadmin_component_1.AddBranchMobile,
            mobileadmin_component_2.CreateUserMobile,
            mobileadmin_component_3.ArchiveGroupMobile,
            mobileadmin_component_4.ArchiveBranchMobile,
            mobileadmin_component_5.AddGroupMobile,
            mobileadmin_component_6.AddUserMobile,
            mobileadmin_component_7.RemoveUserMobile,
            groups_component_1.GroupsComponent,
            help_component_1.HelpComponent,
            feedback_component_1.FeedbackComponent,
            marketplace_component_1.MarketplaceComponent,
            vision_component_1.VisionComponent,
            googleanalytics_component_1.GoogleAnalyticsComponent,
            woo_component_1.WooComponent,
            zoho_component_1.ZohoComponent,
            quickbooks_component_1.QuickbooksComponent,
            dentrix_component_1.DentrixComponent,
            account_component_1.AccountComponent,
            billing_component_1.BillingComponent,
            sidebar_component_1.SidebarComponent,
            footer_component_1.FooterComponent,
            contact_component_1.ContactUsComponent,
            privacy_component_1.PrivacyPolicyComponent,
            toolbar_dropdown_component_1.ToolbarDropdownComponent,
            terms_component_1.TermsComponent,
            safe_pipe_1.SafePipe
        ],
        entryComponents: [
            approval_component_2.ApprovalDialog,
            admin_component_2.AddGroupDialog,
            admin_component_3.AddBranchDialog,
            admin_component_4.ArchiveGroupDialog,
            admin_component_5.ArchiveBranchDialog,
            admin_component_6.AddUserDialog,
            admin_component_7.RemoveUserDialog,
            admin_component_8.CreateUserDialog
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        schemas: [
            core_2.CUSTOM_ELEMENTS_SCHEMA
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map