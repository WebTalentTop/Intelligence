import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TokenService } from '../login/token.service';
import { FeedbackService } from '../feedback/feedback.service';

@Component({
	moduleId: module.id,
	selector: 'feedback-comp',
	templateUrl: 'feedback.component.html',
	providers: [TokenService, FeedbackService],
	styleUrls: ['feedback.component.css']
})

export class FeedbackComponent implements OnInit {
	feedback: Object = {};

	constructor(
    private router: Router,
	private tokenService: TokenService,
	private feedbackService: FeedbackService
  ) {}

	ngOnInit() {}
	//email curtis
	submitFeedback(){
		console.log(this.feedback);
		var message = {
			'MESSAGE_TEXT': this.feedback['body'],
			'MESSAGE_HTML': this.feedback['body'],
			'MESSAGE_SUBJECT': 'New Feedback From ',
			'TITLE': this.feedback['title'],
			'TO_ADDRESS': 'curtis@sherlockintelligence.com'
		};
		this.feedbackService.sendMessage(message)
			.subscribe(
				obj => {
					console.log(obj);
				},
				error => {
				  console.log(error);
				});
	}

}
