import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Services/Alert/alert.service';
import { AddMember } from 'src/app/Services/Members/members.interface';
import { MembersService } from 'src/app/Services/Members/members.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit, OnDestroy{
  @ViewChild('fileInput')
  fileInput!: ElementRef;
  fileAttr = 'Choose Photo';
  image: any;
  permissions = false;
  subsink = new SubSink();
  name = new FormControl('', [Validators.required]);
  relation = new FormControl('', [Validators.required]);
  
  constructor(
    private membersService: MembersService,
    private dialogRef: MatDialogRef<AddMemberComponent>,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.image = imgFile.target.files[0];
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

  setPermission(): void {
    this.permissions = !this.permissions
  }

  addMember(): void {
    if(this.name.valid && this.relation.valid && this.image){
        const memberObj: AddMember ={
          name: this.name.value,
          relation: this.relation.value,
          userId: String(localStorage.getItem('userId')),
          image: this.image,
          permissions : this.permissions
        }
        this.subsink.add(
          this.membersService.addMember(memberObj)
          .subscribe((res) =>{
            this.alertService.showSuccessAlert('Member Added successfully');
            this.dialogRef.close();
            this.router.navigate(['/home/memberlist']);
          })
        )
    }else{
      return
    }
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

}
