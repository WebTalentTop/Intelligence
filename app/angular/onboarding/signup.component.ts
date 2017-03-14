import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LoginService } from '../login/login.service';
import { OnboardingService } from '../onboarding/onboarding.service';
import { TokenService } from '../login/token.service';

@Component({
	moduleId: module.id,
	selector: 'signup-comp',
	templateUrl: 'signup.component.html',
	providers: [OnboardingService, TokenService, LoginService],
	styleUrls: ['onboarding.component.css']
})

export class SignUpComponent implements OnInit {
	@Output() close: EventEmitter<any> = new EventEmitter();
  user: Object = {};

	constructor(
		private onboardingService: OnboardingService,
		private loginService: LoginService,
    private router: Router
  ) {}

	ngOnInit() {}

  signup(){
		this.onboardingService.signUp(this.user)
			.subscribe(
				obj => {
					this.loginService.login(this.user)
						.subscribe(
							lobj => {

							},
							lerror => {
								console.log(lerror);
							}
						);
				},
				error => {
					console.log(error);
				}
			);
	}
	next(){
		this.close.emit(null);
	}
	getUserInfo(){
		return this.user;
	}
	validateEmail(email) {
		if (!(/^.+@.+\..+$/.test(email))) {
			this.user['emailErrorB'] = true;
			this.user['emailError'] = 'Please enter a valid email address to continue';
		}
	}

	validatePassword(password) {
		if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password))) {
			this.user['passwordErrorB'] = true;
			this.user['passwordError'] = 'Password must be 8 characters long and use at least 1 uppercase character and 1 number';
		}
		if (this.user['confirmpassword'] && this.user['confirmpassword'].length > 0) {
			this.validateConfirm(this.user['confirmpassword'], this.user['password']);
		}
	}

	validateConfirm(confirm, password) {
		if (confirm != password) {
			this.user['confirmErrorB'] = true;
			this.user['confirmError'] = 'Confirm your password by typing the same password as above';
		}
	}

	validatePhone(phone) {
		if (!(/^\d+$/.test(phone))) {
			this.user['phoneErrorB'] = true;
			this.user['phoneError'] = 'Your phone should be a valid phone number without formatting, like 8018675309';
		}
	}
}
