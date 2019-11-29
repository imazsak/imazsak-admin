import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GroupAdminListData, ImazsakService} from '../imazsak.service';
import {MatDialog} from '@angular/material';
import {GroupCreateDialogComponent} from '../group-create-dialog/group-create-dialog.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  dataSource: MatTableDataSource<GroupAdminListData>;
  displayedColumns: string[] = ['id', 'name', 'members'];

  constructor(public dialog: MatDialog, private imazsak: ImazsakService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.loadGroups();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openGroupCreateDialog(): void {
    const dialogRef = this.dialog.open(GroupCreateDialogComponent);

    dialogRef.afterClosed().subscribe(data => {
      if (!!data) {
        this.imazsak.createGroup(data).subscribe(_ => {
          this.loadGroups();
        });
      }
    });
  }

  private loadGroups() {
    this.imazsak.listGroups().subscribe(groups => {
      this.dataSource.data = groups;
    });
  }
}
