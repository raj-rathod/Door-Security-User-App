import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/Services/Alert/alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.alertService.showSuccessAlert("hello world");
  }

}
