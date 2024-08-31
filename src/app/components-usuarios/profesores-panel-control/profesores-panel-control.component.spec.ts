import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresPanelControlComponent } from './profesores-panel-control.component';

describe('ProfesoresPanelControlComponent', () => {
  let component: ProfesoresPanelControlComponent;
  let fixture: ComponentFixture<ProfesoresPanelControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesoresPanelControlComponent]
    });
    fixture = TestBed.createComponent(ProfesoresPanelControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
