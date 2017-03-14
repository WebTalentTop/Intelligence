import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { TeamService } from '../team/team.service';
import { TokenService } from '../login/token.service';
/*
-----------add branch from mobile
*/
@Component({
	moduleId: module.id,
	selector: 'add-branch-mobile',
	providers: [TeamService, TokenService],
	styleUrls: ['team.component.css'],
	templateUrl: 'newBranch.html'
})
export class AddBranchMobile {
	companies = [];
	branch = {};
	company_id:string;
	constructor(private teamService: TeamService, private router: Router){
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
		let link = ['team'];
    this.router.navigate(link);
	}

  cancel(){
    let link = ['team'];
    this.router.navigate(link);
  }
}

/*
-----------add user from mobile
*/
@Component({
  moduleId: module.id,
  selector: 'create-user-mobile',
  providers: [TeamService, TokenService],
  styleUrls: ['team.component.css'],
  templateUrl: 'createUser.html'
})
export class CreateUserMobile {
  companies = [];
  user = {};
  company = {};
  constructor(private teamService: TeamService, private router: Router){
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
    let link=['team'];
    this.router.navigate(link);
  }

  cancel(){
    let link=['team'];
    this.router.navigate(link);
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

@Component({
	moduleId: module.id,
	selector: 'add-group-mobile',
	providers: [TeamService, TokenService],
	styleUrls: ['team.component.css'],
	templateUrl: 'newGroup.html'
})
export class AddGroupMobile {
	group = {};
	companies = [];
	constructor(private teamService: TeamService, private router: Router){
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
			obj => {}
		);
    let link = ['team'];
    this.router.navigate(link);
	}

  cancel() {
    let link = ['team'];
    this.router.navigate(link);
  }
}

@Component({
	moduleId: module.id,
	selector: 'archive-group-mobile',
	providers: [TeamService, TokenService],
	styleUrls: ['team.component.css'],
	templateUrl: 'archiveGroup.html'
})
	export class ArchiveGroupMobile {
		group_id: any;
		private sub: any;
		constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute){

		}

		ngOnInit() {
			this.sub = this.route.params.subscribe(params => {
				this.group_id = +params['id'];
			});
		}

		ngOnDestroy() {
			this.sub.unsubscribe();
		}

		archiveGroup(){
			this.teamService.archiveGroup(this.group_id)
			.subscribe(
				obj => {
					console.log(obj);
				},
				error => console.log(error)
			);
			let link = ['team'];
			this.router.navigate(link);
		}

		cancel() {
	    let link = ['team'];
	    this.router.navigate(link);
	  }
	}

	@Component({
		moduleId: module.id,
		selector: 'archive-branch-mobile',
		providers: [TeamService, TokenService],
		styleUrls: ['team.component.css'],
		templateUrl: 'archiveBranch.html'
	})
		export class ArchiveBranchMobile implements OnInit, OnDestroy {
			branch_id: any;
			private sub: any;
			constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute){

			}

			ngOnInit() {
				this.sub = this.route.params.subscribe(params => {
					this.branch_id = +params['id'];
				});
			}

			ngOnDestroy() {
				this.sub.unsubscribe();
			}

			archiveBranch(){
				console.log('mobiletest');
				console.log(this.branch_id);
				this.teamService.archiveBranch(this.branch_id)
				.subscribe(
					obj => {
						console.log(obj);
					},
					error => console.log(error)
				);
				let link = ['team'];
				this.router.navigate(link);
			}

			cancel(){
				let link = ['team'];
				this.router.navigate(link);
			}

		}

		@Component({
			moduleId: module.id,
			selector: 'add-user-mobile',
			providers: [TeamService, TokenService],
			styleUrls: ['team.component.css'],
			templateUrl: 'addUser.html'
		})
			export class AddUserMobile {
				users = []
				user = {};
				private sub: any;
				group_id: any;
				constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute){
					this.teamService.getUsersForUser()
					.subscribe(
						obj => {
							this.users = obj['USERS'];
						}
					);
				}

				ngOnInit() {
					this.sub = this.route.params.subscribe(params => {
						this.group_id = +params['id'];
					});
				}

				ngOnDestroy() {
					this.sub.unsubscribe();
				}

				addUser(){
					this.teamService.addToGroup(this.user, this.group_id)
					.subscribe(
						obj => {
							console.log(obj);
						},
						error => console.log(error)
					);
					let link = ['team'];
					this.router.navigate(link);
				}

				cancel(){
					let link = ['team'];
					this.router.navigate(link);
				}

			}

			@Component({
				moduleId: module.id,
				selector: 'remove-mobile',
				providers: [TeamService, TokenService],
				styleUrls: ['team.component.css'],
				templateUrl: 'removeUser.html'
			})
				export class RemoveUserMobile {
					private sub: any;
					group_id:any;
					user_id:any;
					constructor(private teamService: TeamService, private router: Router, private route: ActivatedRoute){
					}

					ngOnInit() {
						this.sub = this.route.params.subscribe(params => {
							this.group_id = +params['id'];
							this.user_id = +params['user'];
						});
					}

					ngOnDestroy() {
						this.sub.unsubscribe();
					}

					removeUser(){
						this.teamService.removeUser(this.group_id, this.user_id)
						.subscribe(
							obj => {
								console.log(obj);
							},
							error => console.log(error)
						);
						let link = ['team'];
						this.router.navigate(link);
					}

					cancel() {
						let link = ['team'];
						this.router.navigate(link);
					}

				}
