import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screentest1Component } from './screentest1.component';

describe('Screentest1Component', () => {
  let component: Screentest1Component;
  let fixture: ComponentFixture<Screentest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screentest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screentest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});