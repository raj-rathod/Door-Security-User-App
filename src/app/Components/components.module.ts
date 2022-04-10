import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';
import { MaterialModule } from '../Angular-Material/material.module';


@NgModule({
  declarations: [
    AuthComponent,
    HomeComponent,
    MemberlistComponent,
    AddMemberComponent,
    NotificationListComponent,
    NotificationDetailComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, ComponentsRoutingModule, MaterialModule ]
})
export class ComponentsModule {}