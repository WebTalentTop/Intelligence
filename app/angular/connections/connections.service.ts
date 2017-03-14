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
export class ConnectionService {
  private connectionsUrl = API_URL + '/getDatasourceInfo';
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
  getConnections(): Observable<Object> {
    let body = new URLSearchParams();
    body.set('TOKEN', this.token);
    // console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.connectionsUrl, body, options).map(this.extractData).catch(this.handleError);
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
