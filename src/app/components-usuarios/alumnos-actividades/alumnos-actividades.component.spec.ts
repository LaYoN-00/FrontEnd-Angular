import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosActividadesComponent } from './alumnos-actividades.component';

describe('AlumnosActividadesComponent', () => {
  let component: AlumnosActividadesComponent;
  let fixture: ComponentFixture<AlumnosActividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosActividadesComponent]
    });
    fixture = TestBed.createComponent(AlumnosActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
