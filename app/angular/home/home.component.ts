import { Component, EventEmitter, Input, OnInit, Output, NgZone } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  moduleId: module.id,
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  errorMessage: any;
  paramText: any;
  mode = 'Observable';

  constructor(
	private homeService: HomeService,
	private activatedRoute: ActivatedRoute
  ) {
	
	
  }

  ngOnInit() {
	  this.paramText = 'for your Business';
	  this.homeService.getRouteParams()
		.subscribe(
			obj => {				
				var that = this;				
				var subscription = this.activatedRoute.queryParams.subscribe(
					(param: any) => {						
						var rdr = param['rdr'];						
						if (rdr && rdr.length > 0 && obj['PARAMS'][rdr])
						{
							that.paramText = obj['PARAMS'][rdr];
						}						
				});
				
			},
			error => {
				console.log(error);
			}
		);
	  
  }

}
