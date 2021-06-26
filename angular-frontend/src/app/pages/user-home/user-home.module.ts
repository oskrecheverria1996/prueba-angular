import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbSelectModule } from '@nebular/theme';
import { NgSelectModule } from "@ng-select/ng-select";
import { NbDialogModule, NbListModule } from '@nebular/theme';
import { HorariosComponent } from './horarios/horarios.component';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [
    UserHomeComponent,
    HorariosComponent,
  ],
  imports: [
    ThemeModule,
    NbDialogModule.forRoot(),
    NbListModule,
  ],
  entryComponents: [HorariosComponent],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
})
export class UserHomeModule { }
