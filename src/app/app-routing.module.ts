import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './reports/dashboard/dashboard.component';
import { LoginComponent }       from './auth/login/login.component';
import { AuthGuard }            from './shared/services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/reports/dashboard', pathMatch: 'full' },
  { path: 'reports/dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'auth/login', component: LoginComponent },
  // TODO: if the user is logged then redirect to home
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}