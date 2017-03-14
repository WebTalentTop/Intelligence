import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TokenService } from '../login/token.service';
import { HelpService } from '../help/help.service';

@Component({
	moduleId: module.id,
	selector: 'help-comp',
	templateUrl: 'help.component.html',
	providers: [TokenService, HelpService],
	styleUrls: ['help.component.css']
})

export class HelpComponent implements OnInit {
	help: Object = {};

	constructor(
    private router: Router,
	private tokenService: TokenService,
	private helpService: HelpService
  ) {}

	ngOnInit() {}

	submitHelp(){
		console.log(this.help);
		var message = {
			'MESSAGE_TEXT': this.help['body'],
			'MESSAGE_HTML': this.help['body'],
			'MESSAGE_SUBJECT': 'New Support Request From ',
			'SECTION': this.help['section'],
			'TO_ADDRESS': 'curtis@sherlockintelligence.com'
		};
		this.helpService.sendMessage(message)
			.subscribe(
				obj => {					
					console.log(obj);										
				},
				error => {
				  console.log(error);
				});
	}
}
