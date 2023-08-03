import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep7Component } from './user-step7.component';

describe('UserStep7Component', () => {
  let component: UserStep7Component;
  let fixture: ComponentFixture<UserStep7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep7Component]
    });
    fixture = TestBed.createComponent(UserStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
