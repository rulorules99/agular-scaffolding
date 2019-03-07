import { LoginForm } from '../../forms';
import { NgModule } from '@angular/core';
import { AuthService } from '../../services';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../../components';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    LoginForm
  ]
})
export class AuthModule { }
