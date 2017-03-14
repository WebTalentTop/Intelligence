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
export class DataService {
  private viewUrl = API_URL + '/getUserProfileViews';
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

  // returns the views
  getViews(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.viewUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  // load connectors
  getConnectors(): Observable<Object> {
    console.log("Load connectors function");
    return null;
  }

  // submit help
  submitHelp(): Observable<Object> {
    // let body = JSON.stringify(home);
    let body = "";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.postHomeUrl, body, options).map(this.extractData).catch(this.handleError);
    return null;
  }

  // submit feedback
  submitFeedback(): Observable<Object> {
    // let body = JSON.stringify(home);
    let body = "";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.postHomeUrl, body, options).map(this.extractData).catch(this.handleError);
    return null;
  }

  // load marketplace
  getMarketplace(): Observable<Object> {
    console.log("Load marketplace function");
    return null;
  }

  //Extract the home data from the JSON Response
  private extractData(res: Response) {
    let JSONresponse = res.json();
    return JSONresponse || {};
  }

  //Handle the error and return the error object
  private handleError(res: Response) {
    let JSONresponse = res.json();
    return Observable.throw(JSONresponse);
  }
}
