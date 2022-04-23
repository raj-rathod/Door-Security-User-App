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

  getuser(username: string, password: string):Observable<User>{
    return this.http.get<User>(
      `${this.apiUrl}user?username=${username}&password=${password}`
    );
  }
}
