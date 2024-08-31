import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoEjeciciosComponent } from './calculo-ejecicios.component';

describe('CalculoEjeciciosComponent', () => {
  let component: CalculoEjeciciosComponent;
  let fixture: ComponentFixture<CalculoEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculoEjeciciosComponent]
    });
    fixture = TestBed.createComponent(CalculoEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
