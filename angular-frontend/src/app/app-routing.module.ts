import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './shared/api/services/auth-guard.service';
const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuardService], // here we tell Angular to check the access with our AuthGuard
    loadChildren: './pages/pages.module#PagesModule',
  },
  {
    path: 'auth',
    loadChildren: './pages/auth/auth.module#NgxAuthModule',
  },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];

const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
