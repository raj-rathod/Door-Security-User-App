import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from './members.interface';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
   apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getMembers(id: string| null): Observable<Member[]> {
    return this.http.get<Member[]>(
      `${this.apiUrl}member?userId=${id}`
    )
  }

  updatePermission(id: string, permission:boolean): Observable<Member> {
    const updateObj  = {
      id: id,
      permission: permission
    }
    return this.http.patch<Member>(
      `${this.apiUrl}member`, updateObj
    )
  }

  deleteMember(id: string): Observable<{}>{
    return this.http.delete<{}>(
      `${this.apiUrl}member?id=${id}`
    )
  }
}
