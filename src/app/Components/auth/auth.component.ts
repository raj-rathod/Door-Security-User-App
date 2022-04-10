import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput!: ElementRef;
  signOption = true;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);
  fileAttr = 'Choose Photo';
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signUpOption(): void{
    this.signOption = !this.signOption;
  }

  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
  
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose Photo';
    }
  }

  login(): void {
    this.router.navigate(['/home'])
  }

}
