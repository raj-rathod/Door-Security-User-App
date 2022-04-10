import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
