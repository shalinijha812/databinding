import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCompComponent } from './module-comp.component';

describe('ModuleCompComponent', () => {
  let component: ModuleCompComponent;
  let fixture: ComponentFixture<ModuleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
