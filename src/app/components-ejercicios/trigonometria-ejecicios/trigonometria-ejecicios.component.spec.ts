import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigonometriaEjeciciosComponent } from './trigonometria-ejecicios.component';

describe('TrigonometriaEjeciciosComponent', () => {
  let component: TrigonometriaEjeciciosComponent;
  let fixture: ComponentFixture<TrigonometriaEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrigonometriaEjeciciosComponent]
    });
    fixture = TestBed.createComponent(TrigonometriaEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
