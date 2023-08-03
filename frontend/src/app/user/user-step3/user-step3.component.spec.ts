import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep3Component } from './user-step3.component';

describe('UserStep3Component', () => {
  let component: UserStep3Component;
  let fixture: ComponentFixture<UserStep3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep3Component]
    });
    fixture = TestBed.createComponent(UserStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
