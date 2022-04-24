import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notifications } from './notification.interface';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  apiUrl = environment?.apiUrl
  constructor(
    private http: HttpClient
  ) { }

  getNotifications(userId: string| null): Observable<Notifications[]>{
   return this.http.get<Notifications[]>(
    `${this.apiUrl}notification?userId=${userId}`
   );
  }

  getNotificationDetail(id: string): Observable<Notifications>{
    return this.http.get<Notifications>(
    `${this.apiUrl}notification/notification-detail?id=${id}`
    );
  }
}
