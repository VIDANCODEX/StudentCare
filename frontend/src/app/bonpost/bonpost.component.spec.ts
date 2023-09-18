import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonpostComponent } from './bonpost.component';

describe('BonpostComponent', () => {
  let component: BonpostComponent;
  let fixture: ComponentFixture<BonpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BonpostComponent]
    });
    fixture = TestBed.createComponent(BonpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
