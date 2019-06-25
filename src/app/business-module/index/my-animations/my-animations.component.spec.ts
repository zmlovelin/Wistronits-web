import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnimationsComponent } from './my-animations.component';

describe('MyAnimationsComponent', () => {
  let component: MyAnimationsComponent;
  let fixture: ComponentFixture<MyAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
