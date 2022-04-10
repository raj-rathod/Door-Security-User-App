import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo:'validation', pathMatch:'full'
  },
  {
    path: 'validation', component: AuthComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'memberlist', component: MemberlistComponent
  },
  {
    path: 'notification', component: NotificationDetailComponent
  },
  {
    path: '**', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }