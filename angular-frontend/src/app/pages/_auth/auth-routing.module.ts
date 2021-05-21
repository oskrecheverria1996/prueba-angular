import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';

import { NgxLoginComponent } from './login/login.component'; // <---
import { LogoutComponent } from './sign-out/sign-out.component';

export const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NgxLoginComponent, // <---
      },  {
        path: 'sign-out',
        component: LogoutComponent, // <---
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {
}
