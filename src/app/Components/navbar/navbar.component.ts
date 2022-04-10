import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
     position:{ top:"65px", right:"0" }
    });
  }

}
