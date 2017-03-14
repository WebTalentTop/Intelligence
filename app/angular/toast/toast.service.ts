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
export class ToastService {
  private getToastsUrl = API_URL + '/fetchAlerts';
  private setToastSeenUrl = API_URL + '/removeAlert';
  private addToastUrl = API_URL + '/postAlert';
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
            console.log("getToken ERROR");
          });
        }

  getToasts(path: string): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
	  body.set('URL', '/#' + path);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.getToastsUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  setToastSeen(id: string): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
	  body.set('ID', id);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.setToastSeenUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  addToast(toast: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
	body.set('URL', '/#' + toast['URL']);
	body.set('MESSAGE', toast['MESSAGE']);
	body.set('TITLE', toast['TITLE']);
	body.set('ACTION', toast['ACTION']);
    // console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.addToastUrl, body, options).map(this.extractData).catch(this.handleError);
  }


  //Extract the home data from the JSON Response
  private extractData(res: Response) {
    let JSONresponse = res.json();
    return JSONresponse || {};
  }


  //Handle the error and return the error object
  private handleError(res: Response) {
    // console.log(res);
    let JSONresponse = res.json();
    return Observable.throw(JSONresponse);
  }
}
