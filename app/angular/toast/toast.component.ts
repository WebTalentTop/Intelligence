import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TokenService } from '../login/token.service';
import { ToastService } from '../toast/toast.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var $: any;


@Component({
	moduleId: module.id,
	selector: 'toast-comp',
	templateUrl: 'toast.component.html',
	providers: [TokenService, ToastService],
	styleUrls: ['toast.component.css']
})

export class ToastComponent implements OnInit {
	toasts: any;
	constructor(
		private tokenService: TokenService,
		private toastService: ToastService,
		private toastr: ToastsManager,
	) {}
	ngOnInit() {
		var that = this;
		this.toastService.getToasts(window.location.pathname)
			.subscribe(
				obj => {

					this.toasts = obj['ROWS'];
					// console.log(obj);

					for (var i = 0; i < this.toasts.length; i++) {
						var alert_id = this.toasts[i][0];
						this.toastr[this.toasts[i][1]](this.toasts[i][2] + '<span class="toasttoasttoast" id="TOAST-'+alert_id+'" ></span>', this.toasts[i][3], {enableHTML: true, dismiss: 'click', toastLife: 0});

						//jquery toastbar.height += toastheight

					}

					var jquerystring = '#TOAST-' + alert_id;
					$('.toast').on("click", (function() {
						// console.log('clicked!');
						// console.log(this);
						var z = $(this).find('.toasttoasttoast').first()[0].id;
						// console.log(z);
						var toastid = z.split('-')[1];
						//find the span witht he TOAST-id

						that.seen(toastid);
						//toastbar.height -= toastheight
						that.makeToast();
					}));

				},
				error => {
					console.log("ERROR"); 
				  // console.log(error);
				});
	}

	seen(id) {

		this.toastService.setToastSeen(id)
			.subscribe(
				obj => {
					// console.log(obj);
				},
				error => {
				  console.log(error);
				});
	}

	//this is an example. it isnt initiaed, but here is how you would post a toast
	//also, the user must be logged in to get a toast. we can support arbitrary site-wide toasts in the future pretty easily though should we so desire
	makeToast() {
		var toast = {
			'URL': '/data',
			'MESSAGE': 'hello here is the message',
			'TITLE': 'hi',
			'ACTION': 'success'
		}
		//action can be success|info|warning|error

		this.toastService.addToast(toast)
			.subscribe(
				obj => {
					// console.log(obj);
				},
				error => {
				  console.log(error);
				});
	}


}
