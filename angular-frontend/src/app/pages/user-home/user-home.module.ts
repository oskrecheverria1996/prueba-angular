import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { ComponentAComponent } from '../component-a/component-a.component';
import { ComponentBComponent } from '../component-b/component-b.component';
import { ThemeModule } from '../../@theme/theme.module';
@NgModule({
  declarations: [
    UserHomeComponent, 
    ComponentAComponent, 
    ComponentBComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ]
})
export class UserHomeModule { }
