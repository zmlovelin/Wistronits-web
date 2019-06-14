import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPathComponent } from './routing-path.component';

describe('RoutingPathComponent', () => {
  let component: RoutingPathComponent;
  let fixture: ComponentFixture<RoutingPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
