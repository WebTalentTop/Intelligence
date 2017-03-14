import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../common/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
declare var google: any;


//Create the service
@Injectable()
export class HomeService {
  private redirectParamUrl = API_URL + '/getRouteParams';    
  constructor(
	   private http: Http
  ) {
    }

  getRouteParams(): Observable<Object> {
    let body = new URLSearchParams();
	body.set('NOTHING', 'so-it-doesnt-break');
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.redirectParamUrl, body, options).map(this.extractData).catch(this.handleError);
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
