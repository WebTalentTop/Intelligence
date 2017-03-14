import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LoginService } from '../login/login.service';
import { TokenService } from '../login/token.service';

@Component({
	moduleId: module.id,
	selector: 'login-comp',
	templateUrl: 'login.component.html',
	providers: [LoginService, TokenService],
	styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
  user: Object = {};

	constructor(
		private loginService: LoginService,
    private router: Router
  ) {}

	ngOnInit() {}

  login(){
		this.loginService.login(this.user)
			.subscribe(
				obj => {
					if (obj['STATUS'] == "VALID") {
						let link = ['/data'];
						this.router.navigate(link);
					} else {
						this.user['error'] = true;
					}
					
				},
				error => {
					console.log("User couldn't log in");
					this.user['error'] = true;
				}
			);
  }
}
