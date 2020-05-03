import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './modules/loginPage/components/login-page/login-page.component';
import {HomePageComponent} from './modules/home-page/components/home-page/home-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomePageModule} from './modules/home-page/home-page.module';
import {LoginPageModule} from './modules/loginPage/loginPage.module';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'home', component: HomePageComponent}
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HomePageModule,
    LoginPageModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
