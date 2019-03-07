import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardLogin, AuthGuard } from './core/services';

const appRoutes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'login', loadChildren: './core/modules/auth/auth.module#AuthModule', canActivate: [ AuthGuardLogin ] },
  { path: 'main', loadChildren: './core/modules/main/main.module#MainModule', canActivate: [ AuthGuard ] },
  // { path: '**', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
