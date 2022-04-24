import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl
  constructor(
    private http: HttpClient
  ) { 
  }

  getUserLogin(username: string, password: string): Observable<User>{
    return this.http.get<User>(
      `${this.apiUrl}user/login?username=${username}&password=${password}`
    );
  }
  getUser(userId: string | null): Observable<User>{
    return this.http.get<User>(
    `${this.apiUrl}user?id=${userId}`
    );
  }
}
