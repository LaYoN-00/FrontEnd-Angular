import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPrimosEjeciciosComponent } from './numeros-primos-ejecicios.component';

describe('NumerosPrimosEjeciciosComponent', () => {
  let component: NumerosPrimosEjeciciosComponent;
  let fixture: ComponentFixture<NumerosPrimosEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumerosPrimosEjeciciosComponent]
    });
    fixture = TestBed.createComponent(NumerosPrimosEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
