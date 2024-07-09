import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoremaPitagorasTeoriaComponent } from './teorema-pitagoras-teoria.component';

describe('TeoremaPitagorasTeoriaComponent', () => {
  let component: TeoremaPitagorasTeoriaComponent;
  let fixture: ComponentFixture<TeoremaPitagorasTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeoremaPitagorasTeoriaComponent]
    });
    fixture = TestBed.createComponent(TeoremaPitagorasTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
