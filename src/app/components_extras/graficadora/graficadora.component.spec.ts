import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficadoraComponent } from './graficadora.component';

describe('GraficadoraComponent', () => {
  let component: GraficadoraComponent;
  let fixture: ComponentFixture<GraficadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficadoraComponent]
    });
    fixture = TestBed.createComponent(GraficadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
