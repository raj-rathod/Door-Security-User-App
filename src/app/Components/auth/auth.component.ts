import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput!: ElementRef;
  signOption = true;
  subsink = new SubSink();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  contact = new FormControl('', [Validators.required]);
  fileAttr = 'Choose Photo';
  
  constructor(
    private router: Router,
    private userService: UserService
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
    if(this.emailFormControl.valid && this.password.valid) {
        this.userService.getUserLogin(this.emailFormControl.value, this.password.value)
        .subscribe((res)=>{
          localStorage.setItem('userId', res._id);
          this.router.navigate(['/home']);
        });
    }else{
      return;
    }
  }

}
