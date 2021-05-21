import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NbAuthComponent } from '@nebular/auth';  // <---
import { NgxLoginComponent } from '../_auth/login/login.component'; // <---
import { LogoutComponent } from '../_auth/sign-out/sign-out.component'; // <---

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent, // <---
      }, {
        path: 'log-out',
        component: LogoutComponent, // <---
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
