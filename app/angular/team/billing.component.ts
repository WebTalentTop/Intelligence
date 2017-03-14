import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'billing-comp',
	templateUrl: 'billing.component.html',
	providers: [],
	styleUrls: ['team.component.css']
})

export class BillingComponent implements OnInit {
	stripePayment: Object = {};
	myPlanFormTitle = "My Plan";
	myPlanForm = false;
	planChoice = "Platform";
	planPrice = "495"
	billingFormTitle = "Current Billing Information";
	billingForm = false;
	historicalFormTitle = "Historical";
	historicalForm = false;

	//toogle the toolbars
	toggled(opened: boolean, form){
		switch (form) {
			case 1:
				this.myPlanForm = (this.myPlanForm === false ? true : false);
				break;
			case 2:
				this.billingForm = (this.billingForm === false ? true : false);
				break;
			case 3:
				this.historicalForm = (this.historicalForm === false ? true : false);
				break;
		}
	}
	constructor(
    private router: Router
  ) {}
	ngOnInit() {}

}
