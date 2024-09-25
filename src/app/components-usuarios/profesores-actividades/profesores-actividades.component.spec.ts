import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresActividadesComponent } from './profesores-actividades.component';

describe('ProfesoresActividadesComponent', () => {
  let component: ProfesoresActividadesComponent;
  let fixture: ComponentFixture<ProfesoresActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresActividadesComponent]
    });
    fixture = TestBed.createComponent(ProfesoresActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
