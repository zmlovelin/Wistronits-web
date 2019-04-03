import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmTableComponent } from './zm-table.component';

describe('ZmTableComponent', () => {
  let component: ZmTableComponent;
  let fixture: ComponentFixture<ZmTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZmTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
