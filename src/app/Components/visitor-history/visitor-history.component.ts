import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Services/Alert/alert.service';
import { Notifications } from 'src/app/Services/Notification/notification.interface';
import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-visitor-history',
  templateUrl: './visitor-history.component.html',
  styleUrls: ['./visitor-history.component.css']
})
export class VisitorHistoryComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  date = new Date();
  subsink = new SubSink();
  notificationData: Notifications[] = [];
  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.subsink.add(
      this.notificationService.getNotifications(localStorage.getItem('userId'))
      .subscribe((res) => {
        this.notificationData  = res;
      })
    );
  }
  VisitorDetail(id: string): void {
     this.router.navigate(['/home/notification'],{queryParams: {id:id}});
  }

  deleteVisitor(id: string): void {
    this.subsink.add(
      this.notificationService.deleteNotification(id).
      subscribe((res) => {
         this.alertService.showWarningAlert('Visitor history has been deleted');
         window.location.reload();
      })
    )
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
