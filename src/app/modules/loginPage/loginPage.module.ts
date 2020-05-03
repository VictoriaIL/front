import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class LoginPageModule { }
