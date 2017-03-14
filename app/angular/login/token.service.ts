import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { API_URL } from '../common/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
declare var google: any;


//Create the service
@Injectable()
export class TokenService {
	private verifyTokenUrl = API_URL + '/verifyToken';

	//these should be the ONLY hardcoded urls in the entire site
	private environmentUrl = 'error';

	constructor(private http: Http, private router: Router) {
	}

	getEnvironment(): Observable<Object> {

		let timeout = localStorage.getItem('CONFIG_EXPIRE');

		if (!timeout) {
			return this.http.get(this.environmentUrl).map(data => this.extractConfigData(data)).catch(err => this.handleError(err));
		}

		var date = new Date();
		var epochSeconds = Math.round(date.getTime() / 1000);

		if (+(this.getConfigExpire()) < epochSeconds) {
			return this.http.get(this.environmentUrl).map(data => this.extractConfigData(data)).catch(err => this.handleError(err));
		}

		var data = this.getConfig();

		var token_observable = Observable.create(observer => {
			observer.next(data);
			observer.complete();
			return;
		});
		return token_observable;

	}

	private extractConfigData(res: Response) {
		let JSONresponse = res.json();
		this.setConfigTimeout();
		this.putConfig({'key': 'ANALYTICS_CODE', 'value': JSONresponse.data.ANALYTICS_CODE});
		this.putConfig({'key': 'FACEBOOK_REDIRECT_URL', 'value': JSONresponse.data.FACEBOOK_REDIRECT_URL});
		this.putConfig({'key': 'GOOGLE_REDIRECT_URL', 'value': JSONresponse.data.GOOGLE_REDIRECT_URL});
		this.putConfig({'key': 'API_URL', 'value': JSONresponse.data.API_URL});
		this.putConfig({'key': 'FRONTEND_URL', 'value': JSONresponse.data.FRONTEND_URL});
		return JSONresponse.data || {};
	}

	putConfig(config: Object): void {
		return localStorage.setItem(config['key'], config['value']);
	}

	setConfigTimeout(): void {
		var date = new Date();
		var epochSeconds30Min = (Math.round(date.getTime() / 1000) + (60 * 10));
		return localStorage.setItem('CONFIG_EXPIRE', epochSeconds30Min.toString());
	}

	getConfig(): Object {
		var data = {
			'ANALYTICS_CODE': localStorage.getItem('ANALYTICS_CODE'),
			'FACEBOOK_REDIRECT_URL': localStorage.getItem('FACEBOOK_REDIRECT_URL'),
			'GOOGLE_REDIRECT_URL': localStorage.getItem('GOOGLE_REDIRECT_URL'),
			'API_URL': localStorage.getItem('API_URL'),
			'FRONTEND_URL': localStorage.getItem('FRONTEND_URL')
		};
		return data;
	}

	getConfigExpire(): string {
		return localStorage.getItem('CONFIG_EXPIRE');
	}

	verifyToken(token: string): Observable<Object> {				
		let body = new URLSearchParams();
		body.set('TOKEN', token);		
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.verifyTokenUrl, body, options).map(data => this.extractData(data)).catch(this.handleError);
	}

	getExpire(): string {
		return localStorage.getItem('expire');
	}

	setExpire(): void {
		var date = new Date();
		var epochSeconds30Min = (Math.round(date.getTime() / 1000) + (60 * 30));		
		return localStorage.setItem('expire', epochSeconds30Min.toString());
	}

	getToken(): Observable<Object> {
		let token = localStorage.getItem('token');

		if (!token) {			
			this.removeToken();
			var token_observable = Observable.create(observer => {				
				observer.next(token);
				observer.complete();
				//return () => console.log('disposed yo');
				return;
			});			
			return token_observable;
		}
		
		
		var date = new Date();
		var epochSeconds = Math.round(date.getTime() / 1000);

		if (+(this.getExpire()) < epochSeconds) {			
			return this.verifyToken(token);			
		}
		else {			
			var token_observable = Observable.create(observer => {				
				observer.next(token);
				observer.complete();				
				return;
			});			
			return token_observable;
		}
		
	}

	setToken(token: string): void {
		this.setExpire();
		return localStorage.setItem('token', token);
	}

	removeToken(): void {
		localStorage.removeItem('expire');
		return localStorage.removeItem('token');
	}

	setAndVerifyToken(token: string): Observable<Object> {
		this.setToken(token);
		return this.getToken();
	}

	private extractData(res: Response) {
		let JSONresponse = res.json();
		if (JSONresponse['STATUS'] == 'SUCCESS') {
			//setToken(JSONresponse['token']);
			this.setToken(JSONresponse['TOKEN']);//TOKEN
			return JSONresponse['TOKEN'];
		} else {
			this.removeToken();
			let link = ['/login'];
			this.router.navigate(link);
		}
	}

	logOut(): void {
		this.removeToken();		
	}

	private handleError(res: Response) {
		let JSONresponse = res.json();
		return Observable.throw(JSONresponse);
	}
}
