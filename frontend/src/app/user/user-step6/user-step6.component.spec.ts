import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep6Component } from './user-step6.component';

describe('UserStep6Component', () => {
  let component: UserStep6Component;
  let fixture: ComponentFixture<UserStep6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep6Component]
    });
    fixture = TestBed.createComponent(UserStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
