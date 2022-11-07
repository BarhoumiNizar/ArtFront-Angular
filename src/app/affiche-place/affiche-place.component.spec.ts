import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePlaceComponent } from './affiche-place.component';

describe('AffichePlaceComponent', () => {
  let component: AffichePlaceComponent;
  let fixture: ComponentFixture<AffichePlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichePlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
