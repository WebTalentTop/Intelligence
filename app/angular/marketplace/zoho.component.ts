import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MarketplaceService } from '../marketplace/marketplace.service'
import { TokenService } from '../login/token.service';

@Component({
	moduleId: module.id,
	selector: 'zoho-comp',
	templateUrl: 'zoho.component.html',
	providers: [MarketplaceService, TokenService],
	styleUrls: ['marketplace.component.css']
})

export class ZohoComponent implements OnInit {
	@Output() done: EventEmitter<any> = new EventEmitter();
	connector: Object = {
		"Status": "NEW"
	};

	constructor(
		private router: Router,
		private marketplaceService: MarketplaceService
	) {}

	ngOnInit() {}

	add(){
		console.log(this.connector);
		this.marketplaceService.zoho(this.connector)
		.subscribe(
			obj => {
				// console.log(obj);
				if(window.location.pathname == "/onboard"){
					this.done.emit(null);
				}
			},
			error => {
				console.log(error);
			}
		);

		let link = ['/connectors'];
		this.router.navigate(link);

	}
	test(){
		this.done.emit(null);
	}
}
