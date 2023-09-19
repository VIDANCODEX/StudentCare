import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentaleComponent } from './mentale.component';

describe('MentaleComponent', () => {
  let component: MentaleComponent;
  let fixture: ComponentFixture<MentaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MentaleComponent]
    });
    fixture = TestBed.createComponent(MentaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
