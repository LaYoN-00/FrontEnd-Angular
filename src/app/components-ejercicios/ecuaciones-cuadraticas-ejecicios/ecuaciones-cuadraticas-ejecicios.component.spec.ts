import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesCuadraticasEjeciciosComponent } from './ecuaciones-cuadraticas-ejecicios.component';

describe('EcuacionesCuadraticasEjeciciosComponent', () => {
  let component: EcuacionesCuadraticasEjeciciosComponent;
  let fixture: ComponentFixture<EcuacionesCuadraticasEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcuacionesCuadraticasEjeciciosComponent]
    });
    fixture = TestBed.createComponent(EcuacionesCuadraticasEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
