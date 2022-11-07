import { Injectable } from '@angular/core';
/*** Import * */

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../interfaces/place';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private UrlPlace = 'http://127.0.0.1:8000/place';  // URL to web api Place
  //private UrlPlace = 'http://127.0.0.1:8000/place';  // URL to web api AjoutPlace
  constructor(private http: HttpClient) { }
  //Afficher Places
AfficherPlaces(): Observable<Place>{
  
  return this.http.get<Place>(this.UrlPlace);
}
//Add User

AjoutPlace(pl : Place): Observable<any>{
  return this.http.post<any>(this.UrlPlace,pl);
}

// Supprimer Place
deletePlaceId(id: number) {
  const url = `${this.UrlPlace}/${id}`;
  return this.http.get(url);
}
}
