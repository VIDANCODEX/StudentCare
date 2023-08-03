import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep8Component } from './user-step8.component';

describe('UserStep8Component', () => {
  let component: UserStep8Component;
  let fixture: ComponentFixture<UserStep8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep8Component]
    });
    fixture = TestBed.createComponent(UserStep8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
