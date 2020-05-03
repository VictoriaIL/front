import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-burger-manu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.less']
})
export class BurgerMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('.burger__menu-btn').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('burger__menu-btn-active');
      $('.burger__menu-nav').toggleClass('burger__menu-nav-active');
    });
  }

}
