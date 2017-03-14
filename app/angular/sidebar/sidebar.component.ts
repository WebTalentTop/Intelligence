import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'sidebar-comp',
	templateUrl: 'sidebar.component.html',
	providers: [],
	styleUrls: ['sidebar.component.css']
})

export class SidebarComponent implements OnInit {
	active = "";
	onboard_disable=true;

	constructor(
    private router: Router,
  ) {}

	ngOnInit() {
		this.active = this.router.url;
		if(window.location.pathname == "/onboard"){
			this.onboard_disable=false;
		} else{
			this.onboard_disable=true;
		}
	}
	/* Set the width of the side navigation to 0 */
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
