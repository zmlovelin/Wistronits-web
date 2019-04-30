import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/business'},
  // {path: 'login', loadChildren: './business-module/login/login.module#LoginModule'},
  {path: 'business', loadChildren: './business-module/business.module#BusinessModule'},
  // {path: '', redirectTo: 'business'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
