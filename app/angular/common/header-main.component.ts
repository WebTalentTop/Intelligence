import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TokenService } from '../login/token.service';
import { LoginService } from '../login/login.service';

@Component({
	moduleId: module.id,
	selector: 'header-main-comp',
	templateUrl: 'header-main.component.html',
	providers: [TokenService, LoginService],
	styleUrls: ['header-main.component.css']
})

export class HeaderMainComponent implements OnInit {
	customer: Object = {};
	onboard = false;

	constructor(
		private router: Router,
		private tokenService: TokenService,
		private loginService: LoginService
	) {
		this.tokenService.getToken()
      .subscribe(
      obj => {
				// console.log(obj);
				if(obj==null){
					if (window.location.pathname == "/onboard"){
						console.log('yay');
					} else {
						let link = ['/login'];
						this.router.navigate(link);
					}
				}
      },
      error => console.log(error));
	}
	ngOnInit() {
		if(window.location.pathname == "/onboard"){
			this.onboard = true;
		} else {
			this.onboard = false;
		}

		this.loginService.getUserInfo()
      .subscribe(
      obj => {
          // console.log(obj);
					this.customer = obj;
      },
      error => {
				console.log("ERROR");
				// console.log(error);
		});
	}
	logOut(){
		this.tokenService.logOut();
	}
	toggleNav() {
		var mySidenavClasses = document.getElementById("mySidenav").classList;
		var mainClasses = document.getElementById("main").classList;

		setTimeout(function() {
				window.dispatchEvent(new Event('resize'));
		}, 300);



		if(mySidenavClasses.contains("open-sidenav")){
			mySidenavClasses.remove("open-sidenav");
			mainClasses.remove("open-main")
		}else{
			mySidenavClasses.add("open-sidenav");
			mainClasses.add("open-main");
		}
	}

}
