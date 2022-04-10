import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  date = new Date();
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<NotificationListComponent>
  ) { }

  ngOnInit(): void {
  }

  VisitorDetail(): void {
    this.router.navigate(['/home/notification']);
    this.dialogRef.close();
 }

}
