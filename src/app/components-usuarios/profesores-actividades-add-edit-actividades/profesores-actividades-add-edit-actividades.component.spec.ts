import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresActividadesAddEditActividadesComponent } from './profesores-actividades-add-edit-actividades.component';

describe('ProfesoresActividadesAddEditActividadesComponent', () => {
  let component: ProfesoresActividadesAddEditActividadesComponent;
  let fixture: ComponentFixture<ProfesoresActividadesAddEditActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresActividadesAddEditActividadesComponent]
    });
    fixture = TestBed.createComponent(ProfesoresActividadesAddEditActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
