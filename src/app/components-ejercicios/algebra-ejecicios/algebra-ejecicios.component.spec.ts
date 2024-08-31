import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgebraEjeciciosComponent } from './algebra-ejecicios.component';

describe('AlgebraEjeciciosComponent', () => {
  let component: AlgebraEjeciciosComponent;
  let fixture: ComponentFixture<AlgebraEjeciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlgebraEjeciciosComponent]
    });
    fixture = TestBed.createComponent(AlgebraEjeciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
