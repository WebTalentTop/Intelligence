import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ConnectionService } from '../connections/connections.service';
import { TokenService } from '../login/token.service';
import * as shuffle from 'shufflejs';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'connections-comp',
	templateUrl: 'connections.component.html',
	providers: [ConnectionService, TokenService],
	styleUrls: ['connections.component.css']
})

export class ConnectionsComponent implements OnInit, AfterViewInit {
	connections: any;
	shuffle = true;
	odd = false;

	ngOnInit() {
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
    private router: Router,
		private connectionService: ConnectionService
  ) {
		this.connectionService.getConnections()
		.subscribe(
			obj => {
				this.connections = obj['ROWS'];
				if(this.connections.length % 2 == 1){
					this.odd = true;
				}
				// console.log(this.connections);
				if(this.shuffle){
					setTimeout(function(){
						var myShuffle = new shuffle(document.querySelector('.my-grid-with-images'), {
							itemSelector: '.js-item',
							sizer: '.my-sizer-element',
						});
					}, 100);
				}

			}, error => {
				console.log("ERROR");
			});
		}
}
