import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {CreateGroupRequest, ImazsakService, UserAdminListData} from '../imazsak.service';

@Component({
  selector: 'app-group-create-dialog',
  templateUrl: './group-create-dialog.component.html',
  styleUrls: ['./group-create-dialog.component.scss']
})
export class GroupCreateDialogComponent {

  model = {
    name: '',
    adminUserId: ''
  } as CreateGroupRequest;

  users: UserAdminListData[] = [];

  constructor(public dialogRef: MatDialogRef<GroupCreateDialogComponent>, private imazsak: ImazsakService) {
    imazsak.listUsers().subscribe(users => this.users = users);
  }

}
