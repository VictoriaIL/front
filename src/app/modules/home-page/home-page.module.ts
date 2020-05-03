import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from '../loginPage/components/login-page/login-page.component';
import {HeaderComponent} from './components/header/header/header.component';
import {TableOfTestsComponent} from './components/tableOfTests/table-of-tests/table-of-tests.component';
import {SearcherComponent} from './components/searcher/searcher/searcher.component';
import {MatIconModule} from '@angular/material/icon';
import {BurgerMenuComponent} from './components/header/burger-menu/burger-menu/burger-menu.component';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from "@angular/material";
// import {MatTableModule} from "@angular/material";
 import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
// import {MatInputModule} from '@angular/material/input';
// import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [HomePageComponent, HeaderComponent, TableOfTestsComponent, SearcherComponent, BurgerMenuComponent],
  exports: [HomePageComponent, HeaderComponent, TableOfTestsComponent, SearcherComponent, BurgerMenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ]
})
export class HomePageModule {
}
