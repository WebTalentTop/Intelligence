import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../login/token.service';
import { API_URL } from '../common/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//Create the service
@Injectable()
export class TeamService {
  //gets list of users to approve
  private getApprovalsUrl = API_URL + '/getApprovals';
  //gets all users per group per branch per company for an admin
  private adminUrl = API_URL + '/getCompanyGroupUsersForUser';
  //gets list of all groups user is admin over
  private groupsUrl = API_URL + '/getGroupsForUser';
  //approve a user
  private approveUrl = API_URL + '/approveAndAddToGroups';
  private rejectUrl = API_URL + '/rejectUser';
  //add group
  private addGroupUrl = API_URL + '/createGroup';
  //add branch
  private addBranchUrl = API_URL + '/createBranch';
  //archive group
  private archiveGroupUrl = API_URL + '/archiveGroup';
  //archive branch
  private archiveBranchUrl = API_URL + '/archiveBranch';
  //my groups
  private myGroupsUrl = API_URL + '/getGroupsByMembership';
  //all users for admin
  private usersUrl = API_URL + '/getUsersForUser';
  //add existing user to group
  private addToGroupUrl = API_URL + '/addToGroup';
  //remove user from group
  private removeUrl = API_URL + '/removeFromGroup';
  //create and add to company
  private createUserUrl = API_URL + '/createNewUserInCompany';
  token: any;
  constructor(
	   private http: Http,
     private tokenService: TokenService
  ) {
    this.tokenService.getToken()
          .subscribe(
          obj => {
              this.token = obj;
          },
          error => console.log(error));
        }

  //Get all companies branchs groups and users for an admin
  getApprovals(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.getApprovalsUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  //Get all companies branchs groups and users for an admin
  getCompanyGroupUsersforUser(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.adminUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  //Get all groups for an admin
  getGroupsForUser(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.groupsUrl, body, options).map(this.extractData).catch(this.handleError);
  }
  //Approve a User
  approveUser(user: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
	  body.set('ACCOUNT_ID', user['account_id']);
	  body.set('GROUP_ID_LIST', user['group_id_list']);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.approveUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  rejectUser(approval: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
	  body.set('APPROVAL_ID', approval['approval_id']);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.rejectUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  addGroup(group: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('NAME', group['name']);
    body.set('COMPANY_ID', group['company']);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.addGroupUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  addBranch(branch: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('NAME', branch['name']);
    body.set('WEBSITE', branch['site']);
    body.set('PARENT_COMPANY_ID', branch['company']);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.addBranchUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  archiveGroup(group_id: string): Observable<string> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('GROUP_ID', group_id);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.archiveGroupUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  archiveBranch(branch_id: string): Observable<string> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('COMPANY_ID', branch_id);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.archiveBranchUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  myGroups(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.myGroupsUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  getUsersForUser(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.usersUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  addToGroup(user: Object, group_id:string): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('ACCOUNT_ID', user['id']);
    body.set('GROUP_ID', group_id);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.addToGroupUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  removeUser(group_id:string, user_id:string): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('GROUP_ID', group_id);
    body.set('ACCOUNT_ID', user_id);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.removeUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  createUserInCompany(user: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('USERNAME', user['username']);
    body.set('PASSWORD', user['password']);
  	body.set('FIRSTNAME', user['firstname']);
  	body.set('LASTNAME', user['lastname']);
  	body.set('PHONE', user['telephone']);
  	body.set('EMAIL', user['email']);
    body.set('COMPANY_ID', user['company']);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.createUserUrl, body, options).map(this.extractData).catch(this.handleError);
  }
  //Extract the home data from the JSON Response
  private extractData(res: Response) {
    let JSONresponse = res.json();
    return JSONresponse || {};
  }

  //Handle the error and return the error object
  private handleError(res: Response) {
    console.log(res);
    let JSONresponse = res.json();
    return Observable.throw(JSONresponse);
  }
}
