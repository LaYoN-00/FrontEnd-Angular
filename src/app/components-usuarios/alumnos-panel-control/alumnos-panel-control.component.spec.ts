import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosPanelControlComponent } from './alumnos-panel-control.component';

describe('AlumnosPanelControlComponent', () => {
  let component: AlumnosPanelControlComponent;
  let fixture: ComponentFixture<AlumnosPanelControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosPanelControlComponent]
    });
    fixture = TestBed.createComponent(AlumnosPanelControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
