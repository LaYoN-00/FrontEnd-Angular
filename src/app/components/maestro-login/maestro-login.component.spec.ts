import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroLoginComponent } from './maestro-login.component';

describe('MaestroLoginComponent', () => {
  let component: MaestroLoginComponent;
  let fixture: ComponentFixture<MaestroLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaestroLoginComponent]
    });
    fixture = TestBed.createComponent(MaestroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
