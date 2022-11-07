import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutPlaceComponent } from './ajout-place/ajout-place.component';
import { AffichePlaceComponent } from './affiche-place/affiche-place.component';
import { AjoutTicketCinemaComponent } from './ajout-ticket-cinema/ajout-ticket-cinema.component';
import { AfficheTicketCinemaComponent } from './affiche-ticket-cinema/affiche-ticket-cinema.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutPlaceComponent,
    AffichePlaceComponent,
    AjoutTicketCinemaComponent,
    AfficheTicketCinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
