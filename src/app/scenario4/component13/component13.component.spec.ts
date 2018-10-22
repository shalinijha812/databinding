import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component13Component } from './component13.component';

describe('Component13Component', () => {
  let component: Component13Component;
  let fixture: ComponentFixture<Component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
