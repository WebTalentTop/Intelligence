import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'vision-comp',
	templateUrl: 'vision.component.html',
	providers: [],
	styleUrls: ['marketplace.component.css']
})

export class VisionComponent implements OnInit {
	connector: Object = {};

	constructor(
    private router: Router
  ) {}

	ngOnInit() {}

	add(){
    console.log(this.connector);
  }
}
