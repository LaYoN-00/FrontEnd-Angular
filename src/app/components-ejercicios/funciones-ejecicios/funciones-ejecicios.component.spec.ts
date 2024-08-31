import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesEjeciciosComponent } from './funciones-ejecicios.component';

describe('FuncionesEjeciciosComponent', () => {
  let component: FuncionesEjeciciosComponent;
  let fixture: ComponentFixture<FuncionesEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionesEjeciciosComponent]
    });
    fixture = TestBed.createComponent(FuncionesEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
