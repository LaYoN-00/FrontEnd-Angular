import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbegraTeoriaComponent } from './albegra-teoria.component';

describe('AlbegraTeoriaComponent', () => {
  let component: AlbegraTeoriaComponent;
  let fixture: ComponentFixture<AlbegraTeoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbegraTeoriaComponent]
    });
    fixture = TestBed.createComponent(AlbegraTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
