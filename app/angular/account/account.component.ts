import { Component, EventEmitter, Input, OnInit, Output, animate, state, style, transition, trigger } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TokenService } from '../login/token.service';
import { LoginService } from '../login/login.service';

@Component({
	moduleId: module.id,
	selector: 'account-comp',
	templateUrl: 'account.component.html',
	providers: [TokenService, LoginService],
	styleUrls: ['account.component.css']
})

export class AccountComponent implements OnInit {
	active = -1;
	detailsTitle = "Account Details";
	passwordTitle = "Change Password";
	stateExpression = "collapsed";
	// stateExpression: string;
	change: Object = {};
	customer: Object = {};

	constructor(
    private router: Router,
		private tokenService: TokenService,
		private loginService: LoginService
  ) {
		this.loginService.getUserInfo()
		  .subscribe(
		  obj => {
			  console.log(obj);
						this.customer = obj;
		  },
		  error => console.log(error));
		}

	ngOnInit() {}

	toggled(opened: boolean, number) {
		this.stateExpression = (this.stateExpression ==='collapsed' ? 'expanded' : 'collapsed');
		if (this.active == number){
			this.active = -1;

		} else {
			this.active = number;
		}
	}
	saveInfo(){
		console.log(this.customer);
		this.loginService.changeAccountInformation(this.customer)
			.subscribe(
			  obj => {
				  console.log(obj);
				  let link = ['/data'];
				  this.router.navigate(link);
			  },
			  error => console.log(error));

	}
	changePassword(){
		console.log(this.change);
		this.loginService.resetPassword(this.change['password'])
			.subscribe(
			  obj => {
				  console.log(obj);
				  let link = ['/data'];
				  this.router.navigate(link);
			  },
			  error => console.log(error));


	}

}
