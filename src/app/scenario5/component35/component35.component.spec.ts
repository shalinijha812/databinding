import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component35Component } from './component35.component';

describe('Component35Component', () => {
  let component: Component35Component;
  let fixture: ComponentFixture<Component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
