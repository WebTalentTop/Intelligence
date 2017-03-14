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
var ApprovalComponent = (function () {
    function ApprovalComponent(router, teamService, dialog) {
        var _this = this;
        this.router = router;
        this.teamService = teamService;
        this.dialog = dialog;
        this.approvals = [];
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
        this.teamService.getApprovals()
            .subscribe(function (obj) {
            _this.approvals = obj['PARENT_COMPANIES_ARRAY'];
            console.log(_this.approvals);
        }, function (error) { return console.log(error); });
    }
    ApprovalComponent.prototype.openApprovalDialog = function (account_id, group_id) {
        var _this = this;
        this.dialogRef = this.dialog.open(ApprovalDialog, this.config);
        this.dialogRef.componentInstance.account_id = account_id;
        this.dialogRef.componentInstance.group_id = group_id;
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogRef = null;
            var link = ['/team'];
            _this.router.navigate(link);
        });
    };
    //method to reject a user
    ApprovalComponent.prototype.rejectUser = function (approval_id) {
        var approval = {
            'approval_id': approval_id
        };
        this.teamService.rejectUser(approval)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
    };
    ApprovalComponent.prototype.ngOnInit = function () { };
    return ApprovalComponent;
}());
ApprovalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'appr-comp',
        templateUrl: 'approval.component.html',
        providers: [team_service_1.TeamService],
        styleUrls: ['team.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        team_service_1.TeamService,
        material_1.MdDialog])
], ApprovalComponent);
exports.ApprovalComponent = ApprovalComponent;
//approve a user component
var ApprovalDialog = (function () {
    function ApprovalDialog(dialogRef, teamService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.groups = [];
        this.addGroups = {};
        this.teamService.getGroupsForUser()
            .subscribe(function (obj) {
            // console.log(obj);
            console.log('groups');
            _this.groups = obj['PARENT_COMPANIES_ARRAY'];
            console.log(_this.groups);
            for (var i = 0; i < _this.groups['length']; i++) {
                for (var g = 0; g < _this.groups[i]['groupsArray']['length']; g++) {
                    if (_this.groups[i]['groupsArray'][g]['id'] == _this.group_id) {
                        _this.groups[i]['groupsArray'][g]['check'] = true;
                    }
                    else {
                        _this.groups[i]['groupsArray'][g]['check'] = false;
                    }
                }
                for (var j = 0; j < _this.groups[i]['branchesArray']['length']; j++) {
                    for (var k = 0; k < _this.groups[i]['branchesArray'][j]['groupsArray']['length']; k++) {
                        if (_this.groups[i]['branchesArray'][j]['id'] == _this.group_id) {
                            _this.groups[i]['branchesArray'][j]['groupsArray'][k]['check'] = true;
                        }
                        else {
                            _this.groups[i]['branchesArray'][j]['groupsArray'][k]['check'] = false;
                        }
                    }
                }
            }
        });
    }
    ApprovalDialog.prototype.approveToGroups = function () {
        console.log(this.groups);
        var group_id_list = [];
        for (var i = 0; i < this.groups['length']; i++) {
            for (var g = 0; g < this.groups[i]['groupsArray']['length']; g++) {
                if (this.groups[i]['groupsArray'][g]['check']) {
                    group_id_list.push(this.groups[i]['groupsArray'][g]['id']);
                }
            }
            for (var j = 0; j < this.groups[i]['branchesArray']['length']; j++) {
                for (var k = 0; k < this.groups[i]['branchesArray'][j]['groupsArray']['length']; k++) {
                    if (this.groups[i]['branchesArray'][j]['groupsArray'][k]['check']) {
                        group_id_list.push(this.groups[i]['branchesArray'][j]['groupsArray'][k]['id']);
                    }
                }
            }
        }
        var stringified_group_list = '';
        for (var i = 0; i < group_id_list.length; i++) {
            stringified_group_list += group_id_list[i] + ',';
        }
        var user = {
            'account_id': this.account_id,
            'group_id_list': stringified_group_list.substr(0, stringified_group_list.length - 1)
        }; //group_id_list should look like '4,2,17,292'
        this.teamService.approveUser(user)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        this.dialogRef.close();
    };
    return ApprovalDialog;
}());
ApprovalDialog = __decorate([
    core_1.Component({
        selector: 'approval-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        template: "\n  <h1 md-dialog-title>Approve User</h1>\n  <div *ngFor=\"let company of groups; let i = index\">\n\t\t<md-list>\n\t\t<md-subheader>{{company.name}}</md-subheader>\n\t\t\t<md-list-item *ngFor=\"let group of company.groupsArray; let j = index\">\n\t\t\t\t<md-checkbox [checked]=\"group.check\" [disabled]=\"group.check\" [(ngModel)]=\"group.check\">{{group.name}}</md-checkbox>\n\t\t\t</md-list-item>\n\t\t</md-list>\n\t\t<div *ngFor=\"let branch of company.branchesArray; let k = index\">\n\t\t<md-list>\n\t\t<md-subheader>{{branch.name}}</md-subheader>\n\t\t\t<md-list-item *ngFor=\"let group of branch.groupsArray; let l = index\">\n\t\t\t\t<md-checkbox [checked]=\"group.check\" [disabled]=\"group.check\" [(ngModel)]=\"group.check\">{{group.name}}</md-checkbox>\n\t\t\t</md-list-item>\n\t\t</md-list>\n\t\t</div>\n\t</div>\n\t<md-dialog-actions>\n  <button md-raised-button type=\"submit\" (click)=\"approveToGroups()\">Add User</button>\n\t</md-dialog-actions>"
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService])
], ApprovalDialog);
exports.ApprovalDialog = ApprovalDialog;
//# sourceMappingURL=approval.component.js.map