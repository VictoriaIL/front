import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router, private snackBar: MatSnackBar, private formBuilder: FormBuilder) {
  }

  hide = true;

  sendLoginData(): void {
    const loginMode = {
      username: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };
    this.router.navigate(['home']);
    this.openSnackBar('Добро пожаловать,Виктория!', 'Close');
  }
  getErrorMessage() {
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [Validators.required]]
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
