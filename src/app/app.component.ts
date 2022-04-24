import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './Services/Alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Door Security System';
  
  constructor(
    private alertService: AlertService,
    private router: Router
  ){

  }
  ngOnInit(){
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
     addEventListener('offline', (e: Event) => {
      this.alertService.showErrorAlert("Connection lost..Please connect to internet");
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addEventListener('online', (e: Event) => {
      this.alertService.showSuccessAlert("Connection Restored..");
      window.location.reload();
    });
    if(localStorage.getItem('userId')){
      this.router.navigate(['/home']);
    }
  }


}
