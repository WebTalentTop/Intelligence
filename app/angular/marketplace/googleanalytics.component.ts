import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'googleanalytics-comp',
	templateUrl: 'googleanalytics.component.html',
	providers: [],
	styleUrls: ['marketplace.component.css']
})

export class GoogleAnalyticsComponent implements OnInit {
	@Output() done: EventEmitter<any> = new EventEmitter();
  connector: Object = {};

	constructor(
    private router: Router
  ) {}

	ngOnInit() {}

	add(){
    console.log(this.connector);
		if(window.location.pathname == "/onboard"){
			this.done.emit(null);
		}
  }
	test(){
		this.done.emit(null);
	}
}
