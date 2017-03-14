import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  providers: [],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		
	}

}
