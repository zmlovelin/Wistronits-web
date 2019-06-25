import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRefComponent } from './element-ref.component';

describe('ElementRefComponent', () => {
  let component: ElementRefComponent;
  let fixture: ComponentFixture<ElementRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
