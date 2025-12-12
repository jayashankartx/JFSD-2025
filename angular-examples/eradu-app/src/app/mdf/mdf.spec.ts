import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdf } from './mdf';

describe('Mdf', () => {
  let component: Mdf;
  let fixture: ComponentFixture<Mdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
