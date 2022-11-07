import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheTicketCinemaComponent } from './affiche-ticket-cinema.component';

describe('AfficheTicketCinemaComponent', () => {
  let component: AfficheTicketCinemaComponent;
  let fixture: ComponentFixture<AfficheTicketCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheTicketCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheTicketCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
