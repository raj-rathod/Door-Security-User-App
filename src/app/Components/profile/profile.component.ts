import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Services/User/user.interface';
import { UserService } from 'src/app/Services/User/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User| undefined;
  subsink = new SubSink();
  constructor(
     private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subsink.add(
      this.userService.getUser(localStorage.getItem('userId'))
      .subscribe((res) => {
        this.user = res;
      })
    );
  }
  errorHandle(event: any): void{
    event.target.src = 'assets/security.jpg';
  }

}
