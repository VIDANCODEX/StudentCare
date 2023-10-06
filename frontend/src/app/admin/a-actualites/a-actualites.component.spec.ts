import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AActualitesComponent } from './a-actualites.component';

describe('AActualitesComponent', () => {
  let component: AActualitesComponent;
  let fixture: ComponentFixture<AActualitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AActualitesComponent]
    });
    fixture = TestBed.createComponent(AActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
