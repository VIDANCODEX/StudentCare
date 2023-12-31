import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProfilComponent } from './single-profil.component';

describe('SingleProfilComponent', () => {
  let component: SingleProfilComponent;
  let fixture: ComponentFixture<SingleProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleProfilComponent]
    });
    fixture = TestBed.createComponent(SingleProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
