import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffichePlaceComponent } from './affiche-place/affiche-place.component';
import { AfficheTicketCinemaComponent } from './affiche-ticket-cinema/affiche-ticket-cinema.component';
import { AjoutPlaceComponent } from './ajout-place/ajout-place.component';
import { AjoutTicketCinemaComponent } from './ajout-ticket-cinema/ajout-ticket-cinema.component';


const routes: Routes = [
  { path :'AjouterPlace',component:AjoutPlaceComponent},
  { path: 'AfficherPlace',component:AffichePlaceComponent},
  { path: 'AjouterTicketCinéma',component:AjoutTicketCinemaComponent},
  { path: 'AfficherTicketsCinéma',component:AfficheTicketCinemaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
