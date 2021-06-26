import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbTooltipModule } from '@nebular/theme';
import { AdminHomeModule } from "./admin-home/admin-home.module";
import { UserHomeModule } from "./user-home/user-home.module";

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AdminHomeModule,
    UserHomeModule,
    ThemeModule,
    NbTooltipModule,
  ]
})
export class PagesModule { }
