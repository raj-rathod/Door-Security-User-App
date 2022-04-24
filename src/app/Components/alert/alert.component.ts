import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  title: string;
  type: string;
  constructor(
    private snackBarRef: MatSnackBarRef<AlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: {title: string, type: string}
  ) {
    this.title = data.title;
    this.type = data.type;

  }
  closeDialog(): void {
    this.snackBarRef.dismiss();
  }

  alertType(type: string): {class: string, line: string} {
    switch (type) {
      case "success" : return {class: "text-success-alert d-flex align-items-center",  line:'line-success'};
      case "error" : return {class: "text-failure-alert d-flex align-items-center", line:'line-error'};
      case "info" : return {class: "text-info-alert d-flex align-items-center",  line:'line-info'};
      case "warning" : return {class: "text-warning-alert d-flex align-items-center",  line:'line-warning'};
    }
    return {class: "text-white", line: 'text-white'};
  }

}

