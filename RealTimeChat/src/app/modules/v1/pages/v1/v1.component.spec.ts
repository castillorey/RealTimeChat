/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { V1Component } from './v1.component';

describe('V1Component', () => {
  let component: V1Component;
  let fixture: ComponentFixture<V1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
