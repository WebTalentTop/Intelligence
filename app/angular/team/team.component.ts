import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { TeamService } from '../team/team.service';
import { TokenService } from '../login/token.service';
import { AddGroupDialog, AddBranchDialog, CreateUserDialog } from '../team/admin.component';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'team-comp',
	templateUrl: 'team.component.html',
	providers: [TokenService, TeamService],
	styleUrls: ['team.component.css']
})

export class TeamComponent implements OnInit {
	index = 0;
	active = -1;
	companies = []
	dialogRef: MdDialogRef<AddGroupDialog>;
	branchRef: MdDialogRef<AddBranchDialog>;
	createUserRef: MdDialogRef<CreateUserDialog>;
	lastCloseResult: string;
		config: MdDialogConfig = {
		disableClose: false,
		width: '25em',
		height: '',
		position: {
			top: '',
			bottom: '',
			left: '',
			right: ''
		}
	};
	mobileConfig: MdDialogConfig = {
		disableClose: false,
		width: '100%',
		height: '100vh',
		position: {
			top: '75px',
			left: '50px'
		}
	};
	constructor(
    private router: Router,
		private teamService: TeamService,
		public dialog: MdDialog
  ) {}

	ngOnInit() {}

	openAddBranch(){
		if ($(window).width() <= 600) {
			console.log('mobileConfig');
			let link = ['newBranch'];
			this.router.navigate(link);
		} else {
			this.branchRef = this.dialog.open(AddBranchDialog, this.config);
			this.branchRef.afterClosed().subscribe(result => {
				this.branchRef = null;
				this.teamService.getCompanyGroupUsersforUser()
				.subscribe(
					obj =>{
						this.companies = obj['PARENT_COMPANIES_ARRAY'];
						console.log('im in the subscribe');
					},
				);
			});
		}
	}

	openAddGroup() {
		if ($(window).width() <= 600) {
			let link=['addGroup'];
			this.router.navigate(link);
		} else {
			this.dialogRef = this.dialog.open(AddGroupDialog, this.config);
			this.dialogRef.afterClosed().subscribe(result => {
				this.dialogRef = null;
				this.teamService.getCompanyGroupUsersforUser()
				.subscribe(
					obj =>{
						this.companies = obj['PARENT_COMPANIES_ARRAY'];
					},
					error => console.log(error)
				);
			});
		}
	}

	openCreateUser(company_id){
		if ($(window).width() <= 600) {
			let link=['createUser'];
			this.router.navigate(link);
		} else {
			this.createUserRef = this.dialog.open(CreateUserDialog, this.config);
			this.createUserRef.afterClosed().subscribe(result => {
				this.createUserRef = null;
				this.teamService.getCompanyGroupUsersforUser()
				.subscribe(
					obj =>{
						this.companies = obj['PARENT_COMPANIES_ARRAY'];
					},
					error => console.log(error)
				);
			});
		}
	}
}
