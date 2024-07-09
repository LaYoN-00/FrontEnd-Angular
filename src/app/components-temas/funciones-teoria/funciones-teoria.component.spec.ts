import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesTeoriaComponent } from './funciones-teoria.component';

describe('FuncionesTeoriaComponent', () => {
  let component: FuncionesTeoriaComponent;
  let fixture: ComponentFixture<FuncionesTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncionesTeoriaComponent]
    });
    fixture = TestBed.createComponent(FuncionesTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
