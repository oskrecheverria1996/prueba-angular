import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';

import { AdminHomeModule } from "./admin-home/admin-home.module";
import { UserHomeModule } from "./user-home/user-home.module";
import { ComponentAModule } from "./component-a/component-a.module";
import { ComponentBModule } from "./component-b/component-b.module";

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AdminHomeModule,
    UserHomeModule,
    ThemeModule,
    ComponentAModule,
    ComponentBModule,
  ]
})
export class PagesModule { }
