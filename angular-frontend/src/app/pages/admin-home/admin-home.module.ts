import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminHomeComponent } from './admin-home.component';
import { HorariosComponent } from "./horarios/horarios.component";
import { SalasComponent } from "./salas/salas.component";
import { NbDialogModule, NbListModule } from '@nebular/theme';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [AdminHomeComponent, HorariosComponent, SalasComponent],
  imports: [
    CommonModule,
    ThemeModule,
    NbDialogModule.forRoot(),
    NbListModule
  ],
  entryComponents: [HorariosComponent, SalasComponent],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
})
export class AdminHomeModule { }
