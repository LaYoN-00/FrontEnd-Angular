import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCursosComponent } from './add-edit-cursos.component';

describe('AddEditCursosComponent', () => {
  let component: AddEditCursosComponent;
  let fixture: ComponentFixture<AddEditCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditCursosComponent]
    });
    fixture = TestBed.createComponent(AddEditCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
