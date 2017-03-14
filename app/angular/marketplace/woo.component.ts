import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'woo-comp',
	templateUrl: 'woo.component.html',
	providers: [],
	styleUrls: ['marketplace.component.css']
})

export class WooComponent implements OnInit {
  connector: Object = {};

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  add(){
    console.log(this.connector);
  }
}
