import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicadorPage } from './publicador.page';

describe('PublicadorPage', () => {
  let component: PublicadorPage;
  let fixture: ComponentFixture<PublicadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
