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
var team_service_1 = require("../team/team.service");
var token_service_1 = require("../login/token.service");
/*
-----------add branch from mobile
*/
var AddBranchMobile = (function () {
    function AddBranchMobile(teamService, router) {
        var _this = this;
        this.teamService = teamService;
        this.router = router;
        this.companies = [];
        this.branch = {};
        this.teamService.getGroupsForUser()
            .subscribe(function (obj) {
            _this.companies = obj['PARENT_COMPANIES_ARRAY'];
        });
    }
    AddBranchMobile.prototype.addBranch = function (branch) {
        this.teamService.addBranch(this.branch)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        var link = ['team'];
        this.router.navigate(link);
    };
    AddBranchMobile.prototype.cancel = function () {
        var link = ['team'];
        this.router.navigate(link);
    };
    return AddBranchMobile;
}());
AddBranchMobile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-branch-mobile',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'newBranch.html'
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService, router_1.Router])
], AddBranchMobile);
exports.AddBranchMobile = AddBranchMobile;
/*
-----------add user from mobile
*/
var CreateUserMobile = (function () {
    function CreateUserMobile(teamService, router) {
        var _this = this;
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
    CreateUserMobile.prototype.createUser = function () {
        this.teamService.createUserInCompany(this.user)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        var link = ['team'];
        this.router.navigate(link);
    };
    CreateUserMobile.prototype.cancel = function () {
        var link = ['team'];
        this.router.navigate(link);
    };
    CreateUserMobile.prototype.validateEmail = function (email) {
        if (!(/^.+@.+\..+$/.test(email))) {
            this.user['emailErrorB'] = true;
            this.user['emailError'] = 'Please enter a valid email address to continue';
        }
    };
    CreateUserMobile.prototype.validatePassword = function (password) {
        if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password))) {
            this.user['passwordErrorB'] = true;
            this.user['passwordError'] = 'Password must be 8 characters long and use at least 1 uppercase character and 1 number';
        }
        if (this.user['confirmpassword'] && this.user['confirmpassword'].length > 0) {
            this.validateConfirm(this.user['confirmpassword'], this.user['password']);
        }
    };
    CreateUserMobile.prototype.validateConfirm = function (confirm, password) {
        if (confirm != password) {
            this.user['confirmErrorB'] = true;
            this.user['confirmError'] = 'Confirm your password by typing the same password as above';
        }
    };
    CreateUserMobile.prototype.validatePhone = function (phone) {
        if (!(/^\d+$/.test(phone))) {
            this.user['phoneErrorB'] = true;
            this.user['phoneError'] = 'Your phone should be a valid phone number without formatting, like 8018675309';
        }
    };
    return CreateUserMobile;
}());
CreateUserMobile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-user-mobile',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'createUser.html'
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService, router_1.Router])
], CreateUserMobile);
exports.CreateUserMobile = CreateUserMobile;
var AddGroupMobile = (function () {
    function AddGroupMobile(teamService, router) {
        var _this = this;
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
    AddGroupMobile.prototype.addGroup = function (group) {
        console.log(this.group);
        this.teamService.addGroup(this.group)
            .subscribe(function (obj) { });
        var link = ['team'];
        this.router.navigate(link);
    };
    AddGroupMobile.prototype.cancel = function () {
        var link = ['team'];
        this.router.navigate(link);
    };
    return AddGroupMobile;
}());
AddGroupMobile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-group-mobile',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'newGroup.html'
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService, router_1.Router])
], AddGroupMobile);
exports.AddGroupMobile = AddGroupMobile;
var ArchiveGroupMobile = (function () {
    function ArchiveGroupMobile(teamService, router, route) {
        this.teamService = teamService;
        this.router = router;
        this.route = route;
    }
    ArchiveGroupMobile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.group_id = +params['id'];
        });
    };
    ArchiveGroupMobile.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ArchiveGroupMobile.prototype.archiveGroup = function () {
        this.teamService.archiveGroup(this.group_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        var link = ['team'];
        this.router.navigate(link);
    };
    ArchiveGroupMobile.prototype.cancel = function () {
        var link = ['team'];
        this.router.navigate(link);
    };
    return ArchiveGroupMobile;
}());
ArchiveGroupMobile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'archive-group-mobile',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'archiveGroup.html'
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService, router_1.Router, router_1.ActivatedRoute])
], ArchiveGroupMobile);
exports.ArchiveGroupMobile = ArchiveGroupMobile;
var ArchiveBranchMobile = (function () {
    function ArchiveBranchMobile(teamService, router, route) {
        this.teamService = teamService;
        this.router = router;
        this.route = route;
    }
    ArchiveBranchMobile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.branch_id = +params['id'];
        });
    };
    ArchiveBranchMobile.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ArchiveBranchMobile.prototype.archiveBranch = function () {
        console.log('mobiletest');
        console.log(this.branch_id);
        this.teamService.archiveBranch(this.branch_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        var link = ['team'];
        this.router.navigate(link);
    };
    ArchiveBranchMobile.prototype.cancel = function () {
        var link = ['team'];
        this.router.navigate(link);
    };
    return ArchiveBranchMobile;
}());
ArchiveBranchMobile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'archive-branch-mobile',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'archiveBranch.html'
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService, router_1.Router, router_1.ActivatedRoute])
], ArchiveBranchMobile);
exports.ArchiveBranchMobile = ArchiveBranchMobile;
var AddUserMobile = (function () {
    function AddUserMobile(teamService, router, route) {
        var _this = this;
        this.teamService = teamService;
        this.router = router;
        this.route = route;
        this.users = [];
        this.user = {};
        this.teamService.getUsersForUser()
            .subscribe(function (obj) {
            _this.users = obj['USERS'];
        });
    }
    AddUserMobile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.group_id = +params['id'];
        });
    };
    AddUserMobile.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AddUserMobile.prototype.addUser = function () {
        this.teamService.addToGroup(this.user, this.group_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        var link = ['team'];
        this.router.navigate(link);
    };
    AddUserMobile.prototype.cancel = function () {
        var link = ['team'];
        this.router.navigate(link);
    };
    return AddUserMobile;
}());
AddUserMobile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-user-mobile',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'addUser.html'
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService, router_1.Router, router_1.ActivatedRoute])
], AddUserMobile);
exports.AddUserMobile = AddUserMobile;
var RemoveUserMobile = (function () {
    function RemoveUserMobile(teamService, router, route) {
        this.teamService = teamService;
        this.router = router;
        this.route = route;
    }
    RemoveUserMobile.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.group_id = +params['id'];
            _this.user_id = +params['user'];
        });
    };
    RemoveUserMobile.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RemoveUserMobile.prototype.removeUser = function () {
        this.teamService.removeUser(this.group_id, this.user_id)
            .subscribe(function (obj) {
            console.log(obj);
        }, function (error) { return console.log(error); });
        var link = ['team'];
        this.router.navigate(link);
    };
    RemoveUserMobile.prototype.cancel = function () {
        var link = ['team'];
        this.router.navigate(link);
    };
    return RemoveUserMobile;
}());
RemoveUserMobile = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'remove-mobile',
        providers: [team_service_1.TeamService, token_service_1.TokenService],
        styleUrls: ['team.component.css'],
        templateUrl: 'removeUser.html'
    }),
    __metadata("design:paramtypes", [team_service_1.TeamService, router_1.Router, router_1.ActivatedRoute])
], RemoveUserMobile);
exports.RemoveUserMobile = RemoveUserMobile;
//# sourceMappingURL=mobileadmin.component.js.map