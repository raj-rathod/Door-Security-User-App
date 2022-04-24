import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Notifications } from 'src/app/Services/Notification/notification.interface';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
   
  notificationList: Notifications[] = [];
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<NotificationListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notifications[],
  ) { 
  }

  ngOnInit(): void {
    this.notificationList = this.data
  }
  VisitorDetail(id: string): void {
    this.router.navigate(['/home/notification'],{queryParams: {id:id}});
    this.dialogRef.close();
 }

}
