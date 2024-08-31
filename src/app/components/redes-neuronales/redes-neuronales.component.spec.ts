import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesNeuronalesComponent } from './redes-neuronales.component';

describe('RedesNeuronalesComponent', () => {
  let component: RedesNeuronalesComponent;
  let fixture: ComponentFixture<RedesNeuronalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedesNeuronalesComponent]
    });
    fixture = TestBed.createComponent(RedesNeuronalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
