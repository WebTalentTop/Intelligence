import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as shuffle from 'shufflejs';


@Component({
	moduleId: module.id,
	selector: 'marketplace-comp',
	templateUrl: 'marketplace.component.html',
	providers: [],
	styleUrls: ['marketplace.component.css']
})

export class MarketplaceComponent implements OnInit {
	active = -1;
	connectors = [
		{
			"title":"Vision",
			"image":"app/images/Vision_200x200.png"
		},
		{
			"title":"Woo Commerce",
			"image":"app/images/connector_woo.png"
		},
		{
			"title":"Dentrix",
			"image":"app/images/connector_dentrix.png"
		},
		{
			"title":"Google Analytics",
			"image":"app/images/GA_200x200.png"
		},
		{
			"title":"Quickbooks",
			"image":"app/images/connector_quickbooks.png"
		},
		{
			"title":"Zoho",
			"image":"app/images/connector_zoho.png"
		}
	]

	constructor(
    private router: Router
  ) {}

	ngOnInit() {
		// setTimeout(function(){
		// 	var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
		// 		itemSelector: '.js-item',
		// 		sizer: '.my-sizer-element',
		// 	});
		// }, 100);
	}

	expand(number){
		if(this.active == number){
			this.active = -1;
		}else {
			this.active = number;
		}
		// setTimeout(function(){
		// 	var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
		// 		itemSelector: '.js-item',
		// 		sizer: '.my-sizer-element',
		// 	});
		// }, 100);
	}
}
