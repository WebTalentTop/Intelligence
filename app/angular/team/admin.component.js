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
var AdminComponent = (function () {
    function AdminComponent(router, teamService, dialog) {
        var _this = this;
        this.router = router;
        this.teamService = teamService;
        this.dialog = dialog;
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
        this.teamService.getCompanyGroupUsersforUser()
            .subscribe(function (obj) {
            _this.companies = obj['PARENT_COMPANIES_ARRAY'];
        }, function (error) { return console.log(error); });
    }
    //for controlling the drop downs in the team pages
    AdminComponent.prototype.toggled = function (opened, number) {
        if (this.active == number) {
            this.active = -1;
        }
        else {
            this.active = number;
        }
    };
    //opens dialog to archive group
    AdminComponent.prototype.openArchiveGroup = function (group_id) {
        var _this = this;
        if ($(window).width() <= 600) {
            var link = ['archiveGroup/', group_id];
            this.router.navigate(link);
        }
        else {
            this.archiveGroupRef = this.dialog.open(ArchiveGroupDialog, this.config);
            this.archiveGroupRef.componentInstance.group_id = group_id;
            this.archiveGroupRef.afterClosed().subscribe(function (result) {
                _this.archiveGroupRef = null;
                _this.teamService.getCompanyGroupUsersforUser()
                    .subscribe(function (obj) {
                    _this.companies = obj['PARENT_COMPANIES_ARRAY'];
                }, function (error) { return console.log(error); });
            });
        }
    };
    //opens dialog to archive branch
    AdminComponent.prototype.openArchiveBranch = function (branch_id) {
        var _this = this;
        if ($(window).width() <= 600) {
            var branchId = branch_id;
            var link = ['archiveBranch/', branch_id];
            this.router.navigate(link);
        }
        else {
            this.archiveBranchRef = this.dialog.open(ArchiveBranchDialog, this.config);
            this.archiveBranchRef.componentInstance.branch_id = branch_id;
            this.archiveBranchRef.afterClosed().subscribe(function (result) {
                _this.archiveBranchRef = null;
                _this.teamService.getCompanyGroupUsersforUser()
                    .subscribe(function (obj) {
                    _this.companies = obj['PARENT_COMPANIES_ARRAY'];
                }, function (error) { return console.log(error); });
            });
        }
    };
    //opens dialog to add a user
    AdminComponent.prototype.openAddUser = function (group_id) {
        var _this = this;
        if ($(window).width() <= 600) {
            var link = ['addUser/', group_id];
            this.router.navigate(link);
        }
        else {
            this.addUserRef = this.dialog.open(AddUserDialog, this.config);
            this.addUserRef.componentInstance.group_id = group_id;
            this.addUserRef.afterClosed().subscribe(function (result) {
                _this.archiveBranchRef = null;
                _this.teamService.getCompanyGroupUsersforUser()
                    .subscribe(function (obj) {
                    _this.companies = obj['PARENT_COMPANIES_ARRAY'];
                }, function (error) { return console.log(error); });
            });
        }
    };
    //opens a dialog to remove a user from the group
    AdminComponent.prototype.openRemove = function (user_id, group_id) {
        var _this = this;
        if ($(window).width() <= 600) {
            var link = ['removeUser/', group_id, user_id];
            this.router.navigate(link);
        }
        else {
            this.removeUserRef = this.dialog.open(RemoveUserDialog, this.config);
            this.removeUserRef.componentInstance.group_id = group_id;
            this.removeUserRef.componentInstance.user_id = user_id;
            this.removeUserRef.afterClosed().subscribe(function (result) {
                _this.archiveBranchRef = null;
                _this.teamService.getCompanyGroupUsersforUser()
                    .subscribe(function (obj) {
                    _this.companies = obj['PARENT_COMPANIES_ARRAY'];
                }, function (error) { return console.log(error); });
            });
        }
    };
    AdminComponent.prototype.ngOnInit = function () { };
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'admin-comp',
        templateUrl: 'admin.component.html',
        providers: [team_service_1.TeamService],
        styleUrls: ['team.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        team_service_1.TeamService,
        material_1.MdDialog])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//create new group component
var AddGroupDialog = (function () {
    function AddGroupDialog(dialogRef, teamService, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.router = router;
        this.group = {};
        this.companies = [];
        this.teamService.getGroupsForUser()
            .subscribe(function (obj) {
            _this.companies = obj['PARENT_COMPANIES_ARRAY'];
            console.log(_this.companies);
        });
    }
    AddGroupDialog.prototype.addGroup = function (group) {
        var _this = this;
        console.log(this.group);
        this.teamService.addGroup(this.group)
            .subscribe(function (obj) {
            var link = ['/team'];
            _this.router.navigate(link);
        });
        this.dialogRef.close();
    };
    AddGroupDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return AddGroupDialog;
}());
AddGroupDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-group-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'newGroup.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService, router_1.Router])
], AddGroupDialog);
exports.AddGroupDialog = AddGroupDialog;
//create new branch component
var AddBranchDialog = (function () {
    function AddBranchDialog(dialogRef, teamService, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.router = router;
        this.companies = [];
        this.branch = {};
        this.teamService.getGroupsForUser()
            .subscribe(function (obj) {
            _this.companies = obj['PARENT_COMPANIES_ARRAY'];
        });
    }
    AddBranchDialog.prototype.addBranch = function (branch) {
        this.teamService.addBranch(this.branch)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        this.dialogRef.close();
    };
    AddBranchDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return AddBranchDialog;
}());
AddBranchDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-branch-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'newBranch.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService, router_1.Router])
], AddBranchDialog);
exports.AddBranchDialog = AddBranchDialog;
//archive group component
var ArchiveGroupDialog = (function () {
    function ArchiveGroupDialog(dialogRef, teamService) {
        this.dialogRef = dialogRef;
        this.teamService = teamService;
    }
    ArchiveGroupDialog.prototype.archiveGroup = function () {
        this.teamService.archiveGroup(this.group_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        this.dialogRef.close();
    };
    ArchiveGroupDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return ArchiveGroupDialog;
}());
ArchiveGroupDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'archive-group-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'archiveGroup.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService])
], ArchiveGroupDialog);
exports.ArchiveGroupDialog = ArchiveGroupDialog;
//archive branch component
var ArchiveBranchDialog = (function () {
    function ArchiveBranchDialog(dialogRef, teamService) {
        this.dialogRef = dialogRef;
        this.teamService = teamService;
    }
    ArchiveBranchDialog.prototype.archiveBranch = function () {
        this.teamService.archiveBranch(this.branch_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        this.dialogRef.close();
    };
    ArchiveBranchDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return ArchiveBranchDialog;
}());
ArchiveBranchDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'archive-branch-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'archiveBranch.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService])
], ArchiveBranchDialog);
exports.ArchiveBranchDialog = ArchiveBranchDialog;
// add user to company or group component
var AddUserDialog = (function () {
    function AddUserDialog(dialogRef, teamService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.users = [];
        this.user = {};
        this.teamService.getUsersForUser()
            .subscribe(function (obj) {
            _this.users = obj['USERS'];
        });
    }
    AddUserDialog.prototype.addUser = function () {
        this.teamService.addToGroup(this.user, this.group_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        this.dialogRef.close();
    };
    AddUserDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return AddUserDialog;
}());
AddUserDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-user-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'addUser.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService])
], AddUserDialog);
exports.AddUserDialog = AddUserDialog;
//remove user from group component
var RemoveUserDialog = (function () {
    function RemoveUserDialog(dialogRef, teamService) {
        this.dialogRef = dialogRef;
        this.teamService = teamService;
    }
    RemoveUserDialog.prototype.removeUser = function () {
        this.teamService.removeUser(this.group_id, this.user_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        this.dialogRef.close();
    };
    RemoveUserDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    return RemoveUserDialog;
}());
RemoveUserDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'remove-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'removeUser.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService])
], RemoveUserDialog);
exports.RemoveUserDialog = RemoveUserDialog;
//create a new user component
var CreateUserDialog = (function () {
    function CreateUserDialog(dialogRef, teamService, router) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.router = router;
        this.companies = [];
        this.user = {};
        this.company = {};
        this.teamService.getGroupsForUser()
            .subscribe(function (obj) {
            _this.companies = obj['PARENT_COMPANIES_ARRAY'];
        });
    }
    CreateUserDialog.prototype.createUser = function () {
        this.teamService.createUserInCompany(this.user)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        this.dialogRef.close();
    };
    CreateUserDialog.prototype.cancel = function () {
        this.dialogRef.close();
    };
    CreateUserDialog.prototype.validateEmail = function (email) {
        if (!(/^.+@.+\..+$/.test(email))) {
            this.user['emailErrorB'] = true;
            this.user['emailError'] = 'Please enter a valid email address to continue';
        }
    };
    CreateUserDialog.prototype.validatePassword = function (password) {
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password))) {
            this.user['passwordErrorB'] = true;
            this.user['passwordError'] = 'Password must be 8 characters long and use at least 1 uppercase character and 1 number';
        }
        if (this.user['confirmpassword'] && this.user['confirmpassword'].length > 0) {
            this.validateConfirm(this.user['confirmpassword'], this.user['password']);
        }
    };
    CreateUserDialog.prototype.validateConfirm = function (confirm, password) {
        if (confirm != password) {
            this.user['confirmErrorB'] = true;
            this.user['confirmError'] = 'Confirm your password by typing the same password as above';
        }
    };
    CreateUserDialog.prototype.validatePhone = function (phone) {
        if (!(/^\d+$/.test(phone))) {
            this.user['phoneErrorB'] = true;
            this.user['phoneError'] = 'Your phone should be a valid phone number without formatting, like 8018675309';
        }
    };
    return CreateUserDialog;
}());
CreateUserDialog = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-user-dialog',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'createUser.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef, team_service_1.TeamService, router_1.Router])
], CreateUserDialog);
exports.CreateUserDialog = CreateUserDialog;
//# sourceMappingURL=admin.component.js.map