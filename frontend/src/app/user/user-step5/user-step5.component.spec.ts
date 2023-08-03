import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep5Component } from './user-step5.component';

describe('UserStep5Component', () => {
  let component: UserStep5Component;
  let fixture: ComponentFixture<UserStep5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep5Component]
    });
    fixture = TestBed.createComponent(UserStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
