import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep1Component } from './user-step1.component';

describe('UserStep1Component', () => {
  let component: UserStep1Component;
  let fixture: ComponentFixture<UserStep1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep1Component]
    });
    fixture = TestBed.createComponent(UserStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
