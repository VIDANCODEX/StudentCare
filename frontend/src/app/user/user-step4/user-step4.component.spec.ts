import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStep4Component } from './user-step4.component';

describe('UserStep4Component', () => {
  let component: UserStep4Component;
  let fixture: ComponentFixture<UserStep4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserStep4Component]
    });
    fixture = TestBed.createComponent(UserStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
