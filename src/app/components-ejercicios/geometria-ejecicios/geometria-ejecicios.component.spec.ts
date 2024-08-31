import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriaEjeciciosComponent } from './geometria-ejecicios.component';

describe('GeometriaEjeciciosComponent', () => {
  let component: GeometriaEjeciciosComponent;
  let fixture: ComponentFixture<GeometriaEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeometriaEjeciciosComponent]
    });
    fixture = TestBed.createComponent(GeometriaEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
