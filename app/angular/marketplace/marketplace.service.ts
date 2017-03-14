import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../login/token.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
declare var google: any;


//Create the service
@Injectable()
export class MarketplaceService {
  private zohoUrl = 'https://api.sherlockintelligence.com:2033/zoho';
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

  //Login the user
  zoho(connection: Object): Observable<Object> {
    let body = new URLSearchParams();
    body.set('USER_DATASOURCE_NAME', connection['name']);
    body.set('USERNAME', connection['email']);
    body.set('PASSWORD', connection['password']);
    body.set('APP_SPECIFIC_PASSWORD', connection['apppassword']);
    body.set('CLIENT_ID', '4');
    body.set('MASTER_CONNECTOR_INFO_ID', '1');
    body.set('LOAD_STATUS', connection['Status']);
    body.set('TOKEN', this.token);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.zohoUrl, body, options).map(data => this.extractData).catch(this.handleError);
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
