import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CathologComponent } from './catholog.component';

describe('CathologComponent', () => {
  let component: CathologComponent;
  let fixture: ComponentFixture<CathologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CathologComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CathologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
