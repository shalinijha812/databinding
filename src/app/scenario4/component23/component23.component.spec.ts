import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component23Component } from './component23.component';

describe('Component23Component', () => {
  let component: Component23Component;
  let fixture: ComponentFixture<Component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
