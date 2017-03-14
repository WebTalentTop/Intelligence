import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, animate, state, style, transition, trigger } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from '../data/data.service';
import { TokenService } from '../login/token.service';
import * as shuffle from 'shufflejs';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'data-comp',
	templateUrl: 'data.component.html',
	providers: [DataService, TokenService],
	styleUrls: ['data.component.css'],
	animations: [
		trigger('searchExtended', [
			state('extended', style({
				width: '169px',
				opacity: '1'
			})),
			state('collapsed', style({
				width: '0px',
				opacity: '0'
			})),
			transition('extended => collapsed', animate('300ms ease-in')),
			transition('collapsed => extended', animate('300ms ease-out'))
		])
	]
})

export class DataComponent implements OnInit, AfterViewInit {
	crumb = "";
	views: any;
	filter = "";
	iframeUrl = "";
	iframeActive = false;
	shuffle = true;
	odd = false;
	search = "collapsed";
	ngOnInit() {
		// console.log($(window).width());
		if($(window).width()<=600){
			this.shuffle = false;
		}
	}

	ngAfterViewInit() {
		$(window).resize(() => {
  		// console.log($(window).width());
			if($(window).width()<=600){
				if(this.shuffle != false){
					this.shuffle = false;
					location.reload();
				}
			}else{
				if(this.shuffle != true){
					this.shuffle = true;
					location.reload();
				}
			}
		});
  }

	constructor(
		private dataService: DataService,
    private router: Router,
		private route: ActivatedRoute
  ) {
		this.dataService.getViews()
		.subscribe(
			obj => {
				this.views = obj['VIEWS'];
				if(this.views.length % 2 == 1){
					this.odd = true;
				}
				for (var i = 0; i < this.views.length; i++) {
					this.views[i].show = true;
				}
				this.route.params.forEach((params: Params) => {
				  if (params['view'] !== undefined) {
							this.iframeActive = true;
							this.iframeUrl = this.views[params['view']].invokeurl;
							this.crumb = this.views[params['view']].view_name;
						}else{
							this.iframeActive = false;
							this.crumb = "";
							if(this.shuffle){
								setTimeout(function(){
									var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
										itemSelector: '.js-item',
										sizer: '.my-sizer-element',
									});
								}, 100);
							}
						}
				});
			},
			error => {
				console.log("ERROR");
				// console.log(error);
			}
		);
	}
	toggleSearch(){
		if(this.search == "collapsed"){
			this.search = "extended";
		}else{
			this.search = "collapsed";
			setTimeout(()=>{
				this.filter = "";
				this.runFilter();
			},300);
		}
	}

	//open specific view
	open(number, view){
		this.iframeUrl = view.invokeurl;
		this.iframeActive = true;
		let link = ['/data/'+number];
		this.router.navigate(link);
	}
	//filter views on front end
	runFilter(){
		var count = 0;
		for(var i = 0; i < this.views.length; i++)
		{
			var lower = this.views[i].view_name.toLowerCase();
			if(lower.includes(this.filter.toLowerCase())){
				this.views[i]['show'] = true;
				count++;
			} else {
				this.views[i]['show'] = false;
			}
		}
		if(count % 2 == 1){
			this.odd = true;
		}else{
			this.odd = false;
		}
	}

}
