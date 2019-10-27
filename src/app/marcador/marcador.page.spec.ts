import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcadorPage } from './marcador.page';

describe('MarcadorPage', () => {
  let component: MarcadorPage;
  let fixture: ComponentFixture<MarcadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcadorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
