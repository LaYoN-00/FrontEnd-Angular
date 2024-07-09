import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemarioComponent } from './list-temario.component';

describe('ListTemarioComponent', () => {
  let component: ListTemarioComponent;
  let fixture: ComponentFixture<ListTemarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTemarioComponent]
    });
    fixture = TestBed.createComponent(ListTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
