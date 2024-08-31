import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosDivisibilidadEjeciciosComponent } from './criterios-divisibilidad-ejecicios.component';

describe('CriteriosDivisibilidadEjeciciosComponent', () => {
  let component: CriteriosDivisibilidadEjeciciosComponent;
  let fixture: ComponentFixture<CriteriosDivisibilidadEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriteriosDivisibilidadEjeciciosComponent]
    });
    fixture = TestBed.createComponent(CriteriosDivisibilidadEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
