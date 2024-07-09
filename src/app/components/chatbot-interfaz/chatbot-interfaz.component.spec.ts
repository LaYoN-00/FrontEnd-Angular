import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotInterfazComponent } from './chatbot-interfaz.component';

describe('ChatbotInterfazComponent', () => {
  let component: ChatbotInterfazComponent;
  let fixture: ComponentFixture<ChatbotInterfazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatbotInterfazComponent]
    });
    fixture = TestBed.createComponent(ChatbotInterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
