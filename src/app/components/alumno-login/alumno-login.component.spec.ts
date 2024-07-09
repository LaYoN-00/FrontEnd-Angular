import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoLoginComponent } from './alumno-login.component';

describe('AlumnoLoginComponent', () => {
  let component: AlumnoLoginComponent;
  let fixture: ComponentFixture<AlumnoLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoLoginComponent]
    });
    fixture = TestBed.createComponent(AlumnoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
