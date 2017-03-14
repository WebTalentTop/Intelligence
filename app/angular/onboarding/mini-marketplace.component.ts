import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import * as shuffle from 'shufflejs';


@Component({
	moduleId: module.id,
	selector: 'mini-marketplace-comp',
	templateUrl: 'mini-marketplace.component.html',
	providers: [],
	styleUrls: ['mini-marketplace.component.css']
})

export class MiniMarketplaceComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
	@Output() added: EventEmitter<any> = new EventEmitter();
	active = -1;
	zohoDone = false;
	googleDone = false;

	connectors = [
		{
			"title":"Google Analytics",
			"image":"app/images/GA_200x200.png"
		},
		{
			"title":"Zoho",
			"image":"app/images/connector_zoho.png"
		}
	];

	constructor(
    private router: Router
  ) {}

	ngOnInit() {}

	expand(number){
		if(this.active == number){
			this.active = -1;
		}else {
			this.active = number;
		}
	}
  completed(str){
		this.added.emit({event:event, con:str});

    if(str == "zoho"){
      this.zohoDone = true;
    }else if(str == "google"){
			this.googleDone = true;
		}
  }
  next(){
    this.close.emit(null);
  }
}
