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
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var team_service_1 = require("../team/team.service");
var token_service_1 = require("../login/token.service");
var admin_component_1 = require("../team/admin.component");
var TeamComponent = (function () {
    function TeamComponent(router, teamService, dialog) {
        this.router = router;
        this.teamService = teamService;
        this.dialog = dialog;
        this.index = 0;
        this.active = -1;
        this.companies = [];
        this.config = {
            disableClose: false,
            width: '25em',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            }
        };
        this.mobileConfig = {
            disableClose: false,
            width: '100%',
            height: '100vh',
            position: {
                top: '75px',
                left: '50px'
            }
        };
    }
    TeamComponent.prototype.ngOnInit = function () { };
    TeamComponent.prototype.openAddBranch = function () {
        var _this = this;
        if ($(window).width() <= 600) {
            console.log('mobileConfig');
            var link = ['newBranch'];
            this.router.navigate(link);
        }
        else {
            this.branchRef = this.dialog.open(admin_component_1.AddBranchDialog, this.config);
            this.branchRef.afterClosed().subscribe(function (result) {
                _this.branchRef = null;
                _this.teamService.getCompanyGroupUsersforUser()
                    .subscribe(function (obj) {
                    _this.companies = obj['PARENT_COMPANIES_ARRAY'];
                    console.log('im in the subscribe');
                });
            });
        }
    };
    TeamComponent.prototype.openAddGroup = function () {
        var _this = this;
        if ($(window).width() <= 600) {
            var link = ['addGroup'];
            this.router.navigate(link);
        }
        else {
            this.dialogRef = this.dialog.open(admin_component_1.AddGroupDialog, this.config);
            this.dialogRef.afterClosed().subscribe(function (result) {
                _this.dialogRef = null;
                _this.teamService.getCompanyGroupUsersforUser()
                    .subscribe(function (obj) {
                    _this.companies = obj['PARENT_COMPANIES_ARRAY'];
                }, function (error) { return console.log(error); });
            });
        }
    };
    TeamComponent.prototype.openCreateUser = function (company_id) {
        var _this = this;
        if ($(window).width() <= 600) {
            var link = ['createUser'];
            this.router.navigate(link);
        }
        else {
            this.createUserRef = this.dialog.open(admin_component_1.CreateUserDialog, this.config);
            this.createUserRef.afterClosed().subscribe(function (result) {
                _this.createUserRef = null;
                _this.teamService.getCompanyGroupUsersforUser()
                    .subscribe(function (obj) {
                    _this.companies = obj['PARENT_COMPANIES_ARRAY'];
                }, function (error) { return console.log(error); });
            });
        }
    };
    return TeamComponent;
}());
TeamComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'team-comp',
        templateUrl: 'team.component.html',
        providers: [token_service_1.TokenService, team_service_1.TeamService],
        styleUrls: ['team.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        team_service_1.TeamService,
        material_1.MdDialog])
], TeamComponent);
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map