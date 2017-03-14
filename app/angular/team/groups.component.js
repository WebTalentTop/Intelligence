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
var GroupsComponent = (function () {
    function GroupsComponent(router, teamService, dialog) {
        var _this = this;
        this.router = router;
        this.teamService = teamService;
        this.dialog = dialog;
        this.active = -1;
        this.companies = [];
        this.teamService.myGroups()
            .subscribe(function (obj) {
            _this.companies = obj['PARENT_COMPANIES_ARRAY'];
        }, function (error) { return console.log(error); });
    }
    GroupsComponent.prototype.toggled = function (opened, number) {
        if (this.active == number) {
            this.active = -1;
        }
        else {
            this.active = number;
        }
    };
    GroupsComponent.prototype.ngOnInit = function () { };
    return GroupsComponent;
}());
GroupsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'groups-comp',
        templateUrl: 'groups.component.html',
        providers: [team_service_1.TeamService],
        styleUrls: ['team.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        team_service_1.TeamService,
        material_1.MdDialog])
], GroupsComponent);
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map