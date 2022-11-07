import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTicketCinemaComponent } from './ajout-ticket-cinema.component';

describe('AjoutTicketCinemaComponent', () => {
  let component: AjoutTicketCinemaComponent;
  let fixture: ComponentFixture<AjoutTicketCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutTicketCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutTicketCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
