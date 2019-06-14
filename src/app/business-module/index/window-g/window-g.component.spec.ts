import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowGComponent } from './window-g.component';

describe('WindowGComponent', () => {
  let component: WindowGComponent;
  let fixture: ComponentFixture<WindowGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
