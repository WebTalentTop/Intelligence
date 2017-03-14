import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { TeamService } from '../team/team.service';
import { TokenService } from '../login/token.service';

@Component({
	moduleId: module.id,
	selector: 'appr-comp',
	templateUrl: 'approval.component.html',
	providers: [TeamService],
	styleUrls: ['team.component.css']
})

export class ApprovalComponent implements OnInit {
	approvals = [];
	dialogRef: MdDialogRef<ApprovalDialog>;
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

	constructor(
    private router: Router,
		private teamService: TeamService,
		public dialog: MdDialog,

  ) {
		this.teamService.getApprovals()
		.subscribe(
			obj =>{
				this.approvals = obj['PARENT_COMPANIES_ARRAY'];
				console.log(this.approvals);
			}, error => console.log(error)
		);
	}

	openApprovalDialog(account_id, group_id) {
		this.dialogRef = this.dialog.open(ApprovalDialog, this.config);
		this.dialogRef.componentInstance.account_id = account_id;
		this.dialogRef.componentInstance.group_id = group_id;
		this.dialogRef.afterClosed().subscribe(result => {
			this.dialogRef = null;
			let link = ['/team']
			this.router.navigate(link);
		});
	}
	//method to reject a user
	rejectUser(approval_id) {
		var approval = {
			'approval_id': approval_id
		};
		this.teamService.rejectUser(approval)
			.subscribe(
				obj =>{
					console.log(obj);
				}, error => console.log(error)
			);
	}

	ngOnInit() {}

}
//approve a user component
@Component({
  selector: 'approval-dialog',
	providers: [TeamService, TokenService],
  template: `
  <h1 md-dialog-title>Approve User</h1>
  <div *ngFor="let company of groups; let i = index">
		<md-list>
		<md-subheader>{{company.name}}</md-subheader>
			<md-list-item *ngFor="let group of company.groupsArray; let j = index">
				<md-checkbox [checked]="group.check" [disabled]="group.check" [(ngModel)]="group.check">{{group.name}}</md-checkbox>
			</md-list-item>
		</md-list>
		<div *ngFor="let branch of company.branchesArray; let k = index">
		<md-list>
		<md-subheader>{{branch.name}}</md-subheader>
			<md-list-item *ngFor="let group of branch.groupsArray; let l = index">
				<md-checkbox [checked]="group.check" [disabled]="group.check" [(ngModel)]="group.check">{{group.name}}</md-checkbox>
			</md-list-item>
		</md-list>
		</div>
	</div>
	<md-dialog-actions>
  <button md-raised-button type="submit" (click)="approveToGroups()">Add User</button>
	</md-dialog-actions>`

})
export class ApprovalDialog {
	groups=[];
	addGroups = {};
	account_id:string;
	group_id:string;
	constructor(public dialogRef: MdDialogRef<ApprovalDialog>, private teamService: TeamService){
		this.teamService.getGroupsForUser()
		.subscribe(
			obj =>{
				// console.log(obj);
				console.log('groups');
				this.groups = obj['PARENT_COMPANIES_ARRAY'];
				console.log(this.groups);
				for (var i = 0; i < this.groups['length']; i++) {
					for (var g = 0; g < this.groups[i]['groupsArray']['length']; g++) {
						if(this.groups[i]['groupsArray'][g]['id'] == this.group_id){
							this.groups[i]['groupsArray'][g]['check'] = true;
						}
						else {
							this.groups[i]['groupsArray'][g]['check'] = false;
						}
					}
					for (var j = 0; j < this.groups[i]['branchesArray']['length']; j++) {
						for (var k = 0; k < this.groups[i]['branchesArray'][j]['groupsArray']['length']; k++) {
							if (this.groups[i]['branchesArray'][j]['id'] == this.group_id) {
									this.groups[i]['branchesArray'][j]['groupsArray'][k]['check'] = true;
							} else {
								this.groups[i]['branchesArray'][j]['groupsArray'][k]['check'] = false;
							}
						}

					}
				}
			}
		);
	}

	approveToGroups() {
		console.log(this.groups);
		var group_id_list = [];
		for (var i = 0; i < this.groups['length']; i++) {
			for (var g = 0; g < this.groups[i]['groupsArray']['length']; g++) {
				if(this.groups[i]['groupsArray'][g]['check']) {
					group_id_list.push(this.groups[i]['groupsArray'][g]['id']);
				}
			}
			for (var j = 0; j < this.groups[i]['branchesArray']['length']; j++) {
				for (var k = 0; k < this.groups[i]['branchesArray'][j]['groupsArray']['length']; k++) {
					if(this.groups[i]['branchesArray'][j]['groupsArray'][k]['check']) {
						group_id_list.push(this.groups[i]['branchesArray'][j]['groupsArray'][k]['id']);
					}
				}

			}
		}
		var stringified_group_list = '';
		for (var i = 0; i < group_id_list.length; i++) {
			stringified_group_list += group_id_list[i] + ',';
		}

		var user = {
			'account_id': this.account_id,
			'group_id_list': stringified_group_list.substr(0, stringified_group_list.length - 1)
		}//group_id_list should look like '4,2,17,292'
		this.teamService.approveUser(user)
			.subscribe(
				obj =>{
					console.log(obj);
				}, error => console.log(error)
			);
			this.dialogRef.close();
	}

}
