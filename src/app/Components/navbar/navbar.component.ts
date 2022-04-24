import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Notifications } from 'src/app/Services/Notification/notification.interface';
import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { SubSink } from 'subsink';
import { AddMemberComponent } from '../add-member/add-member.component';
import { NotificationListComponent } from '../notification-list/notification-list.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  notificationListData: Notifications[] = [];
  subsink = new SubSink();
  count = 0;
  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.subsink.add(
      this.notificationService.getNotifications(localStorage.getItem('userId')).
      subscribe((res)=>{
        this.notificationListData = res;
        const unReadedNotification = this.notificationListData.filter((item)=>{
          return !item.isReaded
        })
        this.count = unReadedNotification.length
      })
    )
  }
  notificationList(): void {
    this.dialog.open<NotificationListComponent, Notifications[]>(NotificationListComponent,{
     maxHeight:"70vh",
     width:'300px',
     position:{ top:"65px", right:"0" },
     data: this.notificationListData
    });
  }

  addMemberDialog(): void {
    this.dialog.open(AddMemberComponent,{
      disableClose: true,
    });
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

}
