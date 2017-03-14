import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../login/token.service';
import { API_URL } from '../common/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
declare var google: any;


//Create the service
@Injectable()
export class LoginService {
  private loginUrl = API_URL + '/signIn';
  private userInfoUrl = API_URL + '/fetchLoginDetails';
  private resetPasswordUrl = API_URL + '/resetPassword';
  private changeAccountInfoUrl = API_URL + '/changeAccountInformation';

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
          error => {
            console.log("ERROR");
            // console.log(error)
          });
        }

  //Login the user
  login(user: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('USERNAME', user['username']);
    body.set('PASSWORD', user['password']);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.loginUrl, body, options).map(data => this.extractDataSetToken(data)).catch(this.handleError);
  }

  resetPassword(password: string): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('PASSWORD', password);
    // console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.resetPasswordUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  changeAccountInformation(customer: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    body.set('FIRSTNAME', customer['FNAME']);
	body.set('LASTNAME', customer['LNAME']);
	//body.set('ACCESS_LEVEL', customer['ACCESS']);
	body.set('EMAIL', customer['EMAIL']);
	body.set('PHONE', customer['PHONE']);
	body.set('TITLE', customer['TITLE']);
    // console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.changeAccountInfoUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  // return user details for the account page
  getUserInfo(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.userInfoUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  //Extract the home data from the JSON Response
  private extractData(res: Response) {
    let JSONresponse = res.json();
    return JSONresponse || {};
  }
  private extractDataSetToken(res: Response) {
    let JSONresponse = res.json();
    this.tokenService.setToken(JSONresponse['TOKEN']);
    return JSONresponse || {};
  }

  //Handle the error and return the error object
  private handleError(res: Response) {
    // console.log(res);
    let JSONresponse = res.json();
    return Observable.throw(JSONresponse);
  }
}
