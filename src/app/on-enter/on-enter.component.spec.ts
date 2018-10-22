import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnEnterComponent } from './on-enter.component';

describe('OnEnterComponent', () => {
  let component: OnEnterComponent;
  let fixture: ComponentFixture<OnEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
