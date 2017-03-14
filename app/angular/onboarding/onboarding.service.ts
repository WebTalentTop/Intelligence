import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../login/token.service';
import { API_URL } from '../common/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class OnboardingService {
  private signUpUrl = API_URL + '/saveAccountInformation';
  private joinCompanyUrl = API_URL + '/joinCompany';
  private createCompanyUrl = API_URL + '/createCompany';
  private createSubscriptionUrl = API_URL + '/createSubscription';

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


      signUp(user: Object): Observable<Object> {
        let body = new URLSearchParams();
        body.set('USERNAME', user['username']);
        body.set('PASSWORD', user['password']);
      	body.set('FIRSTNAME', user['firstname']);
      	body.set('LASTNAME', user['lastname']);
      	body.set('PHONE', user['telephone']);
      	body.set('EMAIL', user['email']);
      	body.set('REFERRAL_TOKEN', user['token']);
        // console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.signUpUrl, body, options).map(this.extractData).catch(this.handleError);
      }

      joinCompany(code: string): Observable<Object> {
        let body = new URLSearchParams();
        body.set('TOKEN', localStorage.getItem('token'));
        body.set('COMPANY_ADD_CODE', code);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.joinCompanyUrl, body, options).map(this.extractData).catch(this.handleError);
      }

      createCompany(company: Object): Observable<Object> {
        let body = new URLSearchParams();
        body.set('TOKEN', localStorage.getItem('token'));
        body.set('NAME', company['name']);
        body.set('WEBSITE', company['website']);
        // console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.createCompanyUrl, body, options).map(this.extractData).catch(this.handleError);
      }

      createSubscription(company_id: string, plan: string, stripe_token: string): Observable<Object> {
        let body = new URLSearchParams();
        body.set('TOKEN', localStorage.getItem('token'));
        body.set('COMPANY_ID', company_id);
        body.set('PLAN', plan);
        body.set('STRIPE_TOKEN', stripe_token);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.createSubscriptionUrl, body, options).map(this.extractData).catch(this.handleError);
      }

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
