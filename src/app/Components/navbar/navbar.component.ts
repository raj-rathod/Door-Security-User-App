import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMemberComponent } from '../add-member/add-member.component';
import { NotificationListComponent } from '../notification-list/notification-list.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  notificationList(): void {
    this.dialog.open(NotificationListComponent,{
     height:"70vh",
     width:'300px',
     position:{ top:"65px", right:"0" }
    });
  }

  addMemberDialog(): void {
    this.dialog.open(AddMemberComponent,{
      disableClose: true,
    });
  }

}
