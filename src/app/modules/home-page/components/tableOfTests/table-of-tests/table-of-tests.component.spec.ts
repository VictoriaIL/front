import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOfTestsComponent } from './table-of-tests.component';

describe('TableOfTestsComponent', () => {
  let component: TableOfTestsComponent;
  let fixture: ComponentFixture<TableOfTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOfTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOfTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
