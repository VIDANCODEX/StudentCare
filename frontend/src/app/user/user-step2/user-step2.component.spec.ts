import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep2Component } from './user-step2.component';

describe('UserStep2Component', () => {
  let component: UserStep2Component;
  let fixture: ComponentFixture<UserStep2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep2Component]
    });
    fixture = TestBed.createComponent(UserStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
