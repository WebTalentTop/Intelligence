import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { OnboardingService } from '../onboarding/onboarding.service';
import { TokenService } from '../login/token.service';

@Component({
	moduleId: module.id,
	selector: 'company-comp',
	templateUrl: 'company.component.html',
	providers: [OnboardingService, TokenService],
	styleUrls: ['onboarding.component.css']
})

export class CompanyComponent implements OnInit {
	@Output() close: EventEmitter<any> = new EventEmitter();
  company: Object = {};
	id: string;

	constructor(
		private onboardingService: OnboardingService,
    private router: Router
  ) {}

	ngOnInit() {}
	//method to join an existing company
	next(){
		this.close.emit(null);
	}
	getCompanyInfo(){
		return this.company;
	}

	//method to create a new company
	create(){
		// console.log(this.company);
		this.onboardingService.createCompany(this.company)
			.subscribe(
				obj => {
					// console.log(obj);
					this.id = obj['COMPANY_ID'];
				},
				error => {
					console.log(error);
				}
			);
	}
}
