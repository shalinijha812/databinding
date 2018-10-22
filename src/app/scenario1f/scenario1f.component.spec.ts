import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario1fComponent } from './scenario1f.component';

describe('Scenario1fComponent', () => {
  let component: Scenario1fComponent;
  let fixture: ComponentFixture<Scenario1fComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario1fComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario1fComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
