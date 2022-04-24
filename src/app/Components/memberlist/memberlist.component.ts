import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from 'src/app/Services/Alert/alert.service';
import { Member } from 'src/app/Services/Members/members.interface';
import { MembersService } from 'src/app/Services/Members/members.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = ['position', 'name', 'weight', 'action'];
  membersData: Member[] = [];
  subsink = new SubSink();
  constructor(
    private membersService: MembersService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.subsink.add(
      this.membersService.getMembers(localStorage.getItem('userId')).
      subscribe((res)=>{
        this.membersData = res;
      })
    )
  }

  permissionSet(permission: boolean, id: string) {
    this.subsink.add(
      this.membersService.updatePermission(id, !permission).
      subscribe((res) => {
          this.alertService.showSuccessAlert('Member Permissions updated successfully');
      })
    )
  }

  deleteMember(id: string){
    this.subsink.add(
      this.membersService.deleteMember(id)
      .subscribe((res) => {
        this.alertService.showWarningAlert('Member deleted successfully');
        window.location.reload();
      })
    )
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }

}
