import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerManuComponent } from './burger-menu.component';

describe('BurgerManuComponent', () => {
  let component: BurgerManuComponent;
  let fixture: ComponentFixture<BurgerManuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurgerManuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
