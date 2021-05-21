import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';

import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbTooltipModule,
  NbStepperModule,
} from '@nebular/theme';

import { NgxLoginComponent } from '../_auth/login/login.component'; // <---
import { LogoutComponent } from '../_auth/sign-out/sign-out.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbTooltipModule,
    NbStepperModule,
    NbAuthModule,
  ],
  declarations: [
    NgxLoginComponent, // <---
    LogoutComponent, // <---
  ]
})
export class NgxAuthModule {
}
