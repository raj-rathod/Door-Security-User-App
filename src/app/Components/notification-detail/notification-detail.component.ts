import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/Services/Alert/alert.service';
import { Notifications, NotificationUpdate } from 'src/app/Services/Notification/notification.interface';
import { NotificationService } from 'src/app/Services/Notification/notification.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {
  notification: Notifications | undefined;
  subsink = new SubSink();
  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params?.id){
        this.getNotification(params?.id)
      }
    });
    
  }
  getNotification(id: string): void {
    this.subsink.add(
      this.notificationService.getNotificationDetail(id)
      .subscribe((res) => {
        if(res){
          this.notification = res;
        }
      })
    );
  }
  yourAction(id: string| undefined, action :boolean): void {
    const updateObj: NotificationUpdate = {
        id: id,
        update:{
          yourAction: action,
          isReaded: true,
        }
    }
    this.subsink.add(
      this.notificationService.updateNotification(updateObj)
      .subscribe((res) => {
         this.alertService.showSuccessAlert('Your action is submitted');
         window.location.reload();
      })
    );
  }

}
