import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'src/app/Components/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private matSnackBar: MatSnackBar,
  ) { }
  showSuccessAlert(message: string): void {
    this.matSnackBar.openFromComponent(AlertComponent,{
      data: {title: message, type: 'success'},
      duration: 3000,
      verticalPosition:'top',
      horizontalPosition: 'right'
    });
  }

  showWarningAlert(message: string) : void {
    this.matSnackBar.openFromComponent(AlertComponent,{
      data: {title: message, type: 'warning'},
      duration: 3000,
      verticalPosition:'top',
      horizontalPosition: 'right'
    });
  }

  showErrorAlert(message: string) : void {
    this.matSnackBar.openFromComponent(AlertComponent,{
      data: {title: message, type: 'error'},
      duration: 3000,
      verticalPosition:'top',
      horizontalPosition: 'right'
    });
  }

  showInformationAlert( message: string): void{
    this.matSnackBar.openFromComponent(AlertComponent,{
      data: {title: message, type: 'info'},
      duration: 3000,
      verticalPosition:'top',
      horizontalPosition: 'right'
    });
  }
}
