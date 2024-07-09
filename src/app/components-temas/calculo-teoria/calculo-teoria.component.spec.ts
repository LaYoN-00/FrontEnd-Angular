import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoTeoriaComponent } from './calculo-teoria.component';

describe('CalculoTeoriaComponent', () => {
  let component: CalculoTeoriaComponent;
  let fixture: ComponentFixture<CalculoTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculoTeoriaComponent]
    });
    fixture = TestBed.createComponent(CalculoTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
