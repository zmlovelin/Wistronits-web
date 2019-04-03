import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqComponent } from './jq.component';

describe('JqComponent', () => {
  let component: JqComponent;
  let fixture: ComponentFixture<JqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
