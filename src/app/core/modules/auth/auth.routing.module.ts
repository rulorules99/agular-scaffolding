import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../../components';

const AuthRoutes: Routes = [
  { path: '', component: AuthComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(AuthRoutes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
