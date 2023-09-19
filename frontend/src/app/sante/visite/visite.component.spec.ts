import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteComponent } from './visite.component';

describe('VisiteComponent', () => {
  let component: VisiteComponent;
  let fixture: ComponentFixture<VisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisiteComponent]
    });
    fixture = TestBed.createComponent(VisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
