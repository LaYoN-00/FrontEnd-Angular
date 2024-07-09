import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPrimosTeoriaComponent } from './numeros-primos-teoria.component';

describe('NumerosPrimosTeoriaComponent', () => {
  let component: NumerosPrimosTeoriaComponent;
  let fixture: ComponentFixture<NumerosPrimosTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumerosPrimosTeoriaComponent]
    });
    fixture = TestBed.createComponent(NumerosPrimosTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
