import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListCalificacionesComponent } from './alumnos-list-calificaciones.component';

describe('AlumnosListCalificacionesComponent', () => {
  let component: AlumnosListCalificacionesComponent;
  let fixture: ComponentFixture<AlumnosListCalificacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosListCalificacionesComponent]
    });
    fixture = TestBed.createComponent(AlumnosListCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
