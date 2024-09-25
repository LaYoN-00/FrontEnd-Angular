import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosSingUpComponent } from './alumnos-sing-up.component';

describe('AlumnosSingUpComponent', () => {
  let component: AlumnosSingUpComponent;
  let fixture: ComponentFixture<AlumnosSingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosSingUpComponent]
    });
    fixture = TestBed.createComponent(AlumnosSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
