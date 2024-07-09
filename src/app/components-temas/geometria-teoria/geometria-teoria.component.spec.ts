import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriaTeoriaComponent } from './geometria-teoria.component';

describe('GeometriaTeoriaComponent', () => {
  let component: GeometriaTeoriaComponent;
  let fixture: ComponentFixture<GeometriaTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeometriaTeoriaComponent]
    });
    fixture = TestBed.createComponent(GeometriaTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
