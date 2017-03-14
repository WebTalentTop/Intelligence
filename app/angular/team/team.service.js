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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var token_service_1 = require("../login/token.service");
var config_1 = require("../common/config");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
//Create the service
var TeamService = (function () {
    function TeamService(http, tokenService) {
        var _this = this;
        this.http = http;
        this.tokenService = tokenService;
        //gets list of users to approve
        this.getApprovalsUrl = config_1.API_URL + '/getApprovals';
        //gets all users per group per branch per company for an admin
        this.adminUrl = config_1.API_URL + '/getCompanyGroupUsersForUser';
        //gets list of all groups user is admin over
        this.groupsUrl = config_1.API_URL + '/getGroupsForUser';
        //approve a user
        this.approveUrl = config_1.API_URL + '/approveAndAddToGroups';
        this.rejectUrl = config_1.API_URL + '/rejectUser';
        //add group
        this.addGroupUrl = config_1.API_URL + '/createGroup';
        //add branch
        this.addBranchUrl = config_1.API_URL + '/createBranch';
        //archive group
        this.archiveGroupUrl = config_1.API_URL + '/archiveGroup';
        //archive branch
        this.archiveBranchUrl = config_1.API_URL + '/archiveBranch';
        //my groups
        this.myGroupsUrl = config_1.API_URL + '/getGroupsByMembership';
        //all users for admin
        this.usersUrl = config_1.API_URL + '/getUsersForUser';
        //add existing user to group
        this.addToGroupUrl = config_1.API_URL + '/addToGroup';
        //remove user from group
        this.removeUrl = config_1.API_URL + '/removeFromGroup';
        //create and add to company
        this.createUserUrl = config_1.API_URL + '/createNewUserInCompany';
        this.tokenService.getToken()
            .subscribe(function (obj) {
            _this.token = obj;
        }, function (error) { return console.log(error); });
    }
    //Get all companies branchs groups and users for an admin
    TeamService.prototype.getApprovals = function () {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.getApprovalsUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    //Get all companies branchs groups and users for an admin
    TeamService.prototype.getCompanyGroupUsersforUser = function () {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        console.log(body);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.adminUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    //Get all groups for an admin
    TeamService.prototype.getGroupsForUser = function () {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.groupsUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    //Approve a User
    TeamService.prototype.approveUser = function (user) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('ACCOUNT_ID', user['account_id']);
        body.set('GROUP_ID_LIST', user['group_id_list']);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.approveUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.rejectUser = function (approval) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('APPROVAL_ID', approval['approval_id']);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.rejectUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.addGroup = function (group) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('NAME', group['name']);
        body.set('COMPANY_ID', group['company']);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.addGroupUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.addBranch = function (branch) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('NAME', branch['name']);
        body.set('WEBSITE', branch['site']);
        body.set('PARENT_COMPANY_ID', branch['company']);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.addBranchUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.archiveGroup = function (group_id) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('GROUP_ID', group_id);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.archiveGroupUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.archiveBranch = function (branch_id) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('COMPANY_ID', branch_id);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.archiveBranchUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.myGroups = function () {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.myGroupsUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.getUsersForUser = function () {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.usersUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.addToGroup = function (user, group_id) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('ACCOUNT_ID', user['id']);
        body.set('GROUP_ID', group_id);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.addToGroupUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.removeUser = function (group_id, user_id) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('GROUP_ID', group_id);
        body.set('ACCOUNT_ID', user_id);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.removeUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    TeamService.prototype.createUserInCompany = function (user) {
        var body = new http_1.URLSearchParams();
        body.set('TOKEN', this.token);
        body.set('USERNAME', user['username']);
        body.set('PASSWORD', user['password']);
        body.set('FIRSTNAME', user['firstname']);
        body.set('LASTNAME', user['lastname']);
        body.set('PHONE', user['telephone']);
        body.set('EMAIL', user['email']);
        body.set('COMPANY_ID', user['company']);
        var headers = new http_2.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.createUserUrl, body, options).map(this.extractData).catch(this.handleError);
    };
    //Extract the home data from the JSON Response
    TeamService.prototype.extractData = function (res) {
        var JSONresponse = res.json();
        return JSONresponse || {};
    };
    //Handle the error and return the error object
    TeamService.prototype.handleError = function (res) {
        console.log(res);
        var JSONresponse = res.json();
        return Observable_1.Observable.throw(JSONresponse);
    };
    return TeamService;
}());
TeamService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        token_service_1.TokenService])
], TeamService);
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map