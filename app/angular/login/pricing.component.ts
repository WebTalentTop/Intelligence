import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LoginService } from '../login/login.service';
import { TokenService } from '../login/token.service';

@Component({
	moduleId: module.id,
	selector: 'pricing-comp',
	templateUrl: 'pricing.component.html',
	providers: [LoginService, TokenService],
	styleUrls: ['login.component.css']
})

export class PricingComponent implements OnInit {
  user: Object = {};

	constructor(
		private loginService: LoginService,
    private router: Router
  ) {}

	ngOnInit() {}
}
