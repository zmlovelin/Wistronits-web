import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenModelComponent } from './open-model.component';

describe('OpenModelComponent', () => {
  let component: OpenModelComponent;
  let fixture: ComponentFixture<OpenModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
