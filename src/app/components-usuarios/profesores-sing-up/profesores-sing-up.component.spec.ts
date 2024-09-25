import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresSingUpComponent } from './profesores-sing-up.component';

describe('ProfesoresSingUpComponent', () => {
  let component: ProfesoresSingUpComponent;
  let fixture: ComponentFixture<ProfesoresSingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresSingUpComponent]
    });
    fixture = TestBed.createComponent(ProfesoresSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
