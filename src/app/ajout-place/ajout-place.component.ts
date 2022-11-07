import { Component, OnInit } from '@angular/core';
import { from,Observable } from 'rxjs';
import { Place } from '../interfaces/place';
import { PlaceService } from '../services/place.service';
import { Router } from '@angular/router';
import { HttpClient,HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-ajout-place',
  templateUrl: './ajout-place.component.html',
  styleUrls: ['./ajout-place.component.css']
})
export class AjoutPlaceComponent implements OnInit {
  pl= new Place();
  submitted= false;
  constructor(private plService:PlaceService,private routes:Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  newPlace(){
    this.submitted=false;
    this.pl=new Place();
  }

//Ajout User sans upload File

  AjouTerPlace(){
   this.submitted=true;
  
 
  this.plService.AjoutPlace(this.pl).subscribe(reponse=>{
    console.log('Ajout Place effectuée '+reponse);
    this.submitted = true;
    //POur faire la redirection vers Autre URL
   // this.routes.navigateByUrl('/user');
  },
  error => {
    console.log('Erreur d\'ajout '+error);
    console.log('Data ');
  });
  
 }

}
