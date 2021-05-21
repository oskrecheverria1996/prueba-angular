import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'admin-home',
    component: AdminHomeComponent,
  }, {
    path: 'user-home',
    component: UserHomeComponent,
  }, 
],
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
