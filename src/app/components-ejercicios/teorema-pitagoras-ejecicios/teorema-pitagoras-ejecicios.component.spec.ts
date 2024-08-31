import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaPitagorasEjeciciosComponent } from './teorema-pitagoras-ejecicios.component';

describe('TeoremaPitagorasEjeciciosComponent', () => {
  let component: TeoremaPitagorasEjeciciosComponent;
  let fixture: ComponentFixture<TeoremaPitagorasEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeoremaPitagorasEjeciciosComponent]
    });
    fixture = TestBed.createComponent(TeoremaPitagorasEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
