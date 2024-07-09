import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrigonometriaTeoriaComponent } from './trigonometria-teoria.component';

describe('TrigonometriaTeoriaComponent', () => {
  let component: TrigonometriaTeoriaComponent;
  let fixture: ComponentFixture<TrigonometriaTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrigonometriaTeoriaComponent]
    });
    fixture = TestBed.createComponent(TrigonometriaTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
