import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'header-home-comp',
	templateUrl: 'header-home.component.html',
	providers: [],
	styleUrls: ['header-home.component.css']
})

export class HeaderHomeComponent implements OnInit {

	constructor() { }
	ngOnInit() {}

}
