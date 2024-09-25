import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosActividadesFormComponent } from './alumnos-actividades-form.component';

describe('AlumnosActividadesFormComponent', () => {
  let component: AlumnosActividadesFormComponent;
  let fixture: ComponentFixture<AlumnosActividadesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosActividadesFormComponent]
    });
    fixture = TestBed.createComponent(AlumnosActividadesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
