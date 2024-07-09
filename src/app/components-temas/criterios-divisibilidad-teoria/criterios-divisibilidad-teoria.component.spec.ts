import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriosDivisibilidadTeoriaComponent } from './criterios-divisibilidad-teoria.component';

describe('CriteriosDivisibilidadTeoriaComponent', () => {
  let component: CriteriosDivisibilidadTeoriaComponent;
  let fixture: ComponentFixture<CriteriosDivisibilidadTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriteriosDivisibilidadTeoriaComponent]
    });
    fixture = TestBed.createComponent(CriteriosDivisibilidadTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
