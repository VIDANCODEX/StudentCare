import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABonplanComponent } from './a-bonplan.component';

describe('ABonplanComponent', () => {
  let component: ABonplanComponent;
  let fixture: ComponentFixture<ABonplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ABonplanComponent]
    });
    fixture = TestBed.createComponent(ABonplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
