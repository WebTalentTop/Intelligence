import { Component, EventEmitter, Input, OnInit, Output, animate, state, style, transition, trigger, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TokenService } from '../login/token.service';
import { LoginService } from '../login/login.service';
import { OnboardingService } from '../onboarding/onboarding.service';
import { CompanyComponent } from './company.component';
import { SignUpComponent } from './signup.component';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'onboarding-comp',
	templateUrl: 'onboarding.component.html',
	providers: [TokenService, LoginService, OnboardingService],
	styleUrls: ['onboarding.component.css'],
	animations: [
		trigger('stepperState', [
			state('inactive', style({
				height: '0px',
				overflow: 'hidden'
			})),
			state('active',   style({
				height: '*'
			})),
			transition('inactive => active', animate('500ms ease-in')),
			transition('active => inactive', animate('500ms ease-out'))
		]),
		trigger('stepperVisited', [
			state('current', style({
				// background: 'blue',
				background: '#528fA6'
			})),
			state('true', style({
				// background: 'blue',
				background: '#528fA6'
			})),
			state('false', style({
				// background: 'red',
				background: '#dddddd'
			})),
			transition('false => current', animate('300ms ease-in')),
			transition('current => false', animate('300ms ease-out'))
		])
	]
})

export class OnboardingComponent implements OnInit {



	@ViewChild(CompanyComponent)
	private companyComponent: CompanyComponent;
	@ViewChild(SignUpComponent)
	private signupComponent: SignUpComponent;
	signedUp = false;
	companyCreated = false;
	joinCodeError = false;
	company_id = "";
	onboard = false;
	plan = "123456789";
	jCompany: Object = {};
	connectors = [
		{name: 'Google Analytics', img: 'app/images/GA_200x200.png'},
		{name: 'Zoho', img: 'app/images/Zoho_200x200.png'},
		{name: 'Dentrix', img: 'app/images/Dentrix_200x200.png'},
	];
	connectorsAdded = [];
	active = 0;
 	planSelected = false;
	sections = [
		{
			"state":"active",
			"visited":"current"
		},
		{
			"state":"inactive",
			"visited":"false"
		},
		{
			"state":"inactive",
			"visited":"false"
		},
		{
			"state":"inactive",
			"visited":"false"
		},
		{
			"state":"inactive",
			"visited":"false"
		}
	];
	customSections = [
		{
			"state":"active",
			"visited":"current"
		},
		{
			"state":"inactive",
			"visited":"false"
		},
		{
			"state":"inactive",
			"visited":"false"
		}
	];
	joinSections = [
		{
			"state":"active",
			"visited":"current"
		},
		{
			"state":"inactive",
			"visited":"false"
		}
	]


  constructor(
    private router: Router,
		private tokenService: TokenService,
		private loginService: LoginService,
		private onboardingService: OnboardingService
  ) {
		localStorage.removeItem("token");
	}

	toggle() {
		this.active = 0;
	}
	open(num){
		this.active = num;
	}
	ngOnInit() {}

	confirm(stripe_token){
		/*
				signs up and logs in
					creates company
						signs up zoho if filled out
						signs up ga if filled out
						submit billing info(stripe)
		*/
		var userInfo = this.signupComponent.getUserInfo();
		var companyInfo = this.companyComponent.getCompanyInfo();

		if(this.checkUserInfo(userInfo)){
			if(this.signedUp){
				if(this.companyCreated){
					this.signUpZoho();
					this.signUpGoogleAnalytics();
					this.submitBilling(stripe_token);
				}else{
					this.onboardingService.createCompany(companyInfo)
						.subscribe(
							obj => {
								this.companyCreated = true;
								this.company_id = obj["COMPANY_ID"];
								this.signUpZoho();
								this.signUpGoogleAnalytics();
								this.submitBilling(stripe_token);
							},
							error => {
								console.log(error);
							}
						);
				}
			}else{
				this.onboardingService.signUp(userInfo)
					.subscribe(
						obj => {
							this.loginService.login(userInfo)
								.subscribe(
									lobj => {
										this.signedUp = true;
										this.onboardingService.createCompany(companyInfo)
											.subscribe(
												obj => {
													this.companyCreated = true;
													this.company_id = obj["COMPANY_ID"];
													this.signUpZoho();
													this.signUpGoogleAnalytics();
													this.submitBilling(stripe_token);
												},
												error => {
													console.log(error);
												}
											);
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
		}else{
			this.toggleState(0);
		}
	}
	signUpZoho(){

	}
	signUpGoogleAnalytics(){

	}
	submitBilling(stripe_token){
		this.onboardingService.createSubscription(this.company_id, this.plan, stripe_token)
		.subscribe(
			obj => {
				// console.log(obj);
				let link = ['/data'];
				this.router.navigate(link);
			},
			error => {
				console.log(error);
			}
		)
	}
	joinCompany(){
		// console.log(this.jCompany['addcode']);
		var code = this.jCompany['addcode'];
		var userInfo = this.signupComponent.getUserInfo();
		if(this.checkUserInfo(userInfo)){
			if(this.signedUp){
				this.onboardingService.joinCompany(code)
				.subscribe(
					obj => {
						let link = ['/data'];
						this.router.navigate(link);
					},
					error => {
						this.joinCodeError = true;
						console.log(error);
					}
				)
			}else{
				this.onboardingService.signUp(userInfo)
					.subscribe(
						obj => {
							this.loginService.login(userInfo)
								.subscribe(
									lobj => {
										this.signedUp = true;
										this.onboardingService.joinCompany(code)
										.subscribe(
											obj => {
												let link = ['/data'];
												this.router.navigate(link);
											},
											error => {
												this.joinCodeError = true;
												console.log(error);
											}
										)
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
		}else{
			this.toggleJoinState(0);
		}
	}
	toggleState(num){
		for(var i=0; i<this.sections.length; i++ ){
			if(i < num){
				this.sections[i].state = "inactive";
				this.sections[i].visited = "true";
			}else if(i == num){
				this.sections[i].state = "active";
				this.sections[i].visited = "current";
			}else{
				this.sections[i].state = "inactive";
				this.sections[i].visited = "false";
			}
		}
	}
	toggleCustomState(num){
		for(var i=0; i<this.customSections.length; i++ ){
			if(i < num){
				this.customSections[i].state = "inactive";
				this.customSections[i].visited = "true";
			}else if(i == num){
				this.customSections[i].state = "active";
				this.customSections[i].visited = "current";
			}else{
				this.customSections[i].state = "inactive";
				this.customSections[i].visited = "false";
			}
		}

		if(num == 2){
			var companyInfo = this.companyComponent.getCompanyInfo();
			var userInfo = this.signupComponent.getUserInfo();
			if(this.checkUserInfo(userInfo)){
				if(this.signedUp){
					this.onboardingService.createCompany(companyInfo)
						.subscribe(
							obj => {
								// console.log("sign up, login, and create all worked");
							},
							error => {
								console.log(error);
							}
						);
				}else{
					this.onboardingService.signUp(userInfo)
						.subscribe(
							obj => {
								this.loginService.login(userInfo)
									.subscribe(
										lobj => {
											this.signedUp = true;
											this.onboardingService.createCompany(companyInfo)
												.subscribe(
													obj => {
														// console.log("sign up, login, and create all worked");
													},
													error => {
														console.log(error);
													}
												);
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
			}else{
				this.toggleCustomState(0);
			}
		}
	}
	toggleJoinState(num){
		for(var i=0; i<this.joinSections.length; i++ ){
			if(i < num){
				this.joinSections[i].state = "inactive";
				this.joinSections[i].visited = "true";
			}else if(i == num){
				this.joinSections[i].state = "active";
				this.joinSections[i].visited = "current";
			}else{
				this.joinSections[i].state = "inactive";
				this.joinSections[i].visited = "false";
			}
		}
	}
	checkUserInfo(userInfo){
		if(!userInfo.firstname || !userInfo.lastname || !userInfo.username || !userInfo.email || !userInfo.password || !userInfo.telephone || !userInfo.agreetoterms || userInfo['emailErrorB'] || userInfo['passwordErrorB'] || userInfo['confirmErrorB'] || userInfo['phoneErrorB']){
			return false;
		}
		return true;
	}
	connectorAdded($event){
		if($event.con == "zoho"){
			var obj = {
				"name":"Zoho",
				"image":"app/images/Zoho_200x200.png"
			}
			if(!this.checkIfAdded(obj.name)){
				this.connectorsAdded.push(obj);
			}
		}else if($event.con == "dentrix"){
			var obj = {
				"name":"Dentrix",
				"image":"app/images/Dentrix_200x200.png"
			}
			if(!this.checkIfAdded(obj.name)){
				this.connectorsAdded.push(obj);
			}
		}else if($event.con == "google"){
			var obj = {
				"name":"Google Analytics",
				"image":"app/images/GA_200x200.png"
			}
			if(!this.checkIfAdded(obj.name)){
				this.connectorsAdded.push(obj);
			}
		}
	}
	checkIfAdded(name){
		var found = false;
		for(var i = 0; i < this.connectorsAdded.length; i++) {
		    if (this.connectorsAdded[i].name == name) {
		        found = true;
		        break;
		    }
		}
		return found;
	}

}
