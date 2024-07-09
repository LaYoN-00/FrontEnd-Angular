import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcuacionesCuadraticasTeoriaComponent } from './ecuaciones-cuadraticas-teoria.component';

describe('EcuacionesCuadraticasTeoriaComponent', () => {
  let component: EcuacionesCuadraticasTeoriaComponent;
  let fixture: ComponentFixture<EcuacionesCuadraticasTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcuacionesCuadraticasTeoriaComponent]
    });
    fixture = TestBed.createComponent(EcuacionesCuadraticasTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
