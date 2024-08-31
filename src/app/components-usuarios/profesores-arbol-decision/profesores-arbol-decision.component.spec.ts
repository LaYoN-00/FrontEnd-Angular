import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresArbolDecisionComponent } from './profesores-arbol-decision.component';

describe('ProfesoresArbolDecisionComponent', () => {
  let component: ProfesoresArbolDecisionComponent;
  let fixture: ComponentFixture<ProfesoresArbolDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresArbolDecisionComponent]
    });
    fixture = TestBed.createComponent(ProfesoresArbolDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
