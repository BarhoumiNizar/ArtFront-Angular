import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPlaceComponent } from './ajout-place.component';

describe('AjoutPlaceComponent', () => {
  let component: AjoutPlaceComponent;
  let fixture: ComponentFixture<AjoutPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
