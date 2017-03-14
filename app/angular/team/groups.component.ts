import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { TeamService } from '../team/team.service';
import { TokenService } from '../login/token.service';

@Component({
	moduleId: module.id,
	selector: 'groups-comp',
	templateUrl: 'groups.component.html',
	providers: [TeamService],
	styleUrls: ['team.component.css']
})

export class GroupsComponent implements OnInit {
	active = -1;
	companies = []
	toggled(opened: boolean, number) {
		if (this.active == number){
			this.active = -1;

		} else {
			this.active = number;
		}
	}
	constructor(
    private router: Router,
		private teamService: TeamService,
		public dialog: MdDialog
  ) {
		this.teamService.myGroups()
		.subscribe(
			obj =>{
				this.companies = obj['PARENT_COMPANIES_ARRAY'];
			},
			error => console.log(error)
		);

	}

	ngOnInit() {}

}
