import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresNavbarComponent } from './profesores-navbar.component';

describe('ProfesoresNavbarComponent', () => {
  let component: ProfesoresNavbarComponent;
  let fixture: ComponentFixture<ProfesoresNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresNavbarComponent]
    });
    fixture = TestBed.createComponent(ProfesoresNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
