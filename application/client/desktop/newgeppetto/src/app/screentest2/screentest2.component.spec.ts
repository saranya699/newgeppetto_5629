import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screentest2Component } from './screentest2.component';

describe('Screentest2Component', () => {
  let component: Screentest2Component;
  let fixture: ComponentFixture<Screentest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screentest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screentest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});