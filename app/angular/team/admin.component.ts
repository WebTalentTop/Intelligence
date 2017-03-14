import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { TeamService } from '../team/team.service';
import { TokenService } from '../login/token.service';

declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'admin-comp',
	templateUrl: 'admin.component.html',
	providers: [TeamService],
	styleUrls: ['team.component.css']
})

export class AdminComponent implements OnInit {
	branchId : string;
	active = -1;
	companies = []
	dialogRef: MdDialogRef<AddGroupDialog>;
	branchRef: MdDialogRef<AddBranchDialog>;
	archiveGroupRef: MdDialogRef<ArchiveGroupDialog>;
	archiveBranchRef: MdDialogRef<ArchiveBranchDialog>;
	addUserRef: MdDialogRef<AddUserDialog>;
	removeUserRef: MdDialogRef<RemoveUserDialog>;
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

	//for controlling the drop downs in the team pages
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
		this.teamService.getCompanyGroupUsersforUser()
		.subscribe(
			obj =>{
				this.companies = obj['PARENT_COMPANIES_ARRAY'];
			},
			error => console.log(error)
		);

	}
	//opens dialog to archive group
	openArchiveGroup(group_id){
		if ($(window).width() <= 600) {
			let link = ['archiveGroup/', group_id];
			this.router.navigate(link);
		} else {
			this.archiveGroupRef = this.dialog.open(ArchiveGroupDialog, this.config);
			this.archiveGroupRef.componentInstance.group_id = group_id;
			this.archiveGroupRef.afterClosed().subscribe(result => {

				this.archiveGroupRef = null;
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
	//opens dialog to archive branch
	openArchiveBranch(branch_id){
		if ($(window).width() <= 600) {
			let branchId = branch_id;
			let link = ['archiveBranch/', branch_id];
			this.router.navigate(link);
		} else {
			this.archiveBranchRef = this.dialog.open(ArchiveBranchDialog, this.config);
			this.archiveBranchRef.componentInstance.branch_id = branch_id;
			this.archiveBranchRef.afterClosed().subscribe(result => {

				this.archiveBranchRef = null;
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
	//opens dialog to add a user
	openAddUser(group_id){
		if ($(window).width() <= 600) {
			let link = ['addUser/', group_id];
			this.router.navigate(link);
		} else {
			this.addUserRef = this.dialog.open(AddUserDialog, this.config);
			this.addUserRef.componentInstance.group_id = group_id;
			this.addUserRef.afterClosed().subscribe(result => {
				this.archiveBranchRef = null;
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
	//opens a dialog to remove a user from the group
	openRemove(user_id, group_id){
		if ($(window).width() <= 600) {
			let link = ['removeUser/', group_id, user_id];
			this.router.navigate(link);
		} else {
			this.removeUserRef = this.dialog.open(RemoveUserDialog, this.config);
			this.removeUserRef.componentInstance.group_id = group_id;
			this.removeUserRef.componentInstance.user_id = user_id;
			this.removeUserRef.afterClosed().subscribe(result => {

				this.archiveBranchRef = null;
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
	ngOnInit() {}

}
//create new group component
@Component({
	moduleId: module.id,
	selector: 'add-group-dialog',
	providers: [TeamService, TokenService],
	styleUrls: ['team.component.css'],
	templateUrl: 'newGroup.html'
})
export class AddGroupDialog {
	group = {};
	companies = [];
	constructor(public dialogRef: MdDialogRef<AddGroupDialog>, private teamService: TeamService, private router: Router){
		this.teamService.getGroupsForUser()
		.subscribe(
			obj => {
				this.companies = obj['PARENT_COMPANIES_ARRAY'];
				console.log(this.companies);
			}
		)
	}

	addGroup(group) {
		console.log(this.group);
		this.teamService.addGroup(this.group)
		.subscribe(
			obj => {
				let link = ['/team'];
				this.router.navigate(link);
			}
		);
		this.dialogRef.close();
	}

	cancel() {
		this.dialogRef.close();
	}

}
//create new branch component
@Component({
	moduleId: module.id,
	selector: 'add-branch-dialog',
	providers: [TeamService, TokenService],
	styleUrls: ['team.component.css'],
	templateUrl: 'newBranch.html'
})
export class AddBranchDialog {
	companies = [];
	branch = {};
	company_id:string;
	constructor(public dialogRef: MdDialogRef<AddBranchDialog>, private teamService: TeamService, private router: Router){
		this.teamService.getGroupsForUser()
		.subscribe(
			obj => {
				this.companies = obj['PARENT_COMPANIES_ARRAY'];

			}
		);
	}
	addBranch(branch){

		this.teamService.addBranch(this.branch)
		.subscribe(
			obj => {
				console.log(obj);
			},
			error => console.log(error)
		);
		this.dialogRef.close();
	}
	cancel(){
		this.dialogRef.close();
	}
}
//archive group component
@Component({
	moduleId: module.id,
	selector: 'archive-group-dialog',
	providers: [TeamService, TokenService],
	styleUrls: ['team.component.css'],
	templateUrl: 'archiveGroup.html'
})
	export class ArchiveGroupDialog {
		group_id:string;
		constructor(public dialogRef: MdDialogRef<ArchiveGroupDialog>, private teamService: TeamService){

		}

		archiveGroup(){
			this.teamService.archiveGroup(this.group_id)
			.subscribe(
				obj => {
					console.log(obj);
				},
				error => console.log(error)
			);
			this.dialogRef.close();
		}

		cancel(){
			this.dialogRef.close();
		}

	}
	//archive branch component
	@Component({
		moduleId: module.id,
		selector: 'archive-branch-dialog',
		providers: [TeamService, TokenService],
		styleUrls: ['team.component.css'],
		templateUrl: 'archiveBranch.html'
	})
		export class ArchiveBranchDialog {
			branch_id:string;
			constructor(public dialogRef: MdDialogRef<ArchiveBranchDialog>, private teamService: TeamService){

			}

			archiveBranch(){
				this.teamService.archiveBranch(this.branch_id)
				.subscribe(
					obj => {
						console.log(obj);
					},
					error => console.log(error)
				);
				this.dialogRef.close();
			}

			cancel(){
				this.dialogRef.close();
			}

		}
		// add user to company or group component
		@Component({
			moduleId: module.id,
			selector: 'add-user-dialog',
			providers: [TeamService, TokenService],
			styleUrls: ['team.component.css'],
			templateUrl: 'addUser.html'
		})
			export class AddUserDialog {
				users = []
				user = {};
				group_id: string;
				constructor(public dialogRef: MdDialogRef<ArchiveBranchDialog>, private teamService: TeamService){
					this.teamService.getUsersForUser()
					.subscribe(
						obj => {
							this.users = obj['USERS'];
						}
					);
				}

				addUser(){
					this.teamService.addToGroup(this.user, this.group_id)
					.subscribe(
						obj => {
							console.log(obj);
						},
						error => console.log(error)
					);
					this.dialogRef.close();
				}

				cancel(){
					this.dialogRef.close();
				}
			}
			//remove user from group component
			@Component({
				moduleId: module.id,
				selector: 'remove-dialog',
				providers: [TeamService, TokenService],
				styleUrls: ['team.component.css'],
				templateUrl: 'removeUser.html'
			})
				export class RemoveUserDialog {
					group_id:string;
					user_id:string;
					constructor(public dialogRef: MdDialogRef<RemoveUserDialog>, private teamService: TeamService){

					}

					removeUser(){
						this.teamService.removeUser(this.group_id, this.user_id)
						.subscribe(
							obj => {
								console.log(obj);
							},
							error => console.log(error)
						);
						this.dialogRef.close();
					}

					cancel() {
						this.dialogRef.close();
					}

				}
				//create a new user component
				@Component({
					moduleId: module.id,
					selector: 'create-user-dialog',
					providers: [TeamService, TokenService],
					styleUrls: ['team.component.css'],
					templateUrl: 'createUser.html'
				})
				export class CreateUserDialog {
					companies = [];
					user = {};
					company = {};
					constructor(public dialogRef: MdDialogRef<CreateUserDialog>, private teamService: TeamService, private router: Router){
						this.teamService.getGroupsForUser()
						.subscribe(
							obj => {
								this.companies = obj['PARENT_COMPANIES_ARRAY'];
							}
						);
					}

					createUser(){
						this.teamService.createUserInCompany(this.user)
						.subscribe(
							obj => {
								console.log(obj);
							},
							error => console.log(error)
						);
						this.dialogRef.close();
					}

					cancel(){
						this.dialogRef.close();
					}

					validateEmail(email) {
						if (!(/^.+@.+\..+$/.test(email))) {
							this.user['emailErrorB'] = true;
							this.user['emailError'] = 'Please enter a valid email address to continue';
						}
					}

					validatePassword(password) {
						if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password))) {
							this.user['passwordErrorB'] = true;
							this.user['passwordError'] = 'Password must be 8 characters long and use at least 1 uppercase character and 1 number';
						}
						if (this.user['confirmpassword'] && this.user['confirmpassword'].length > 0) {
							this.validateConfirm(this.user['confirmpassword'], this.user['password']);
						}
					}

					validateConfirm(confirm, password) {
						if (confirm != password) {
							this.user['confirmErrorB'] = true;
							this.user['confirmError'] = 'Confirm your password by typing the same password as above';
						}
					}

					validatePhone(phone) {
						if (!(/^\d+$/.test(phone))) {
							this.user['phoneErrorB'] = true;
							this.user['phoneError'] = 'Your phone should be a valid phone number without formatting, like 8018675309';
						}
					}
				}
