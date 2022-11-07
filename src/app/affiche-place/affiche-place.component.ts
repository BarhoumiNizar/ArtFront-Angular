import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-affiche-place',
  templateUrl: './affiche-place.component.html',
  styleUrls: ['./affiche-place.component.css']
})
export class AffichePlaceComponent implements OnInit {
  places : any=[];
  count = 0;
  recherche = '';
  constructor(private plservice:PlaceService) { }

  ngOnInit(): void {
    this.getPlaces();
  }
  getPlaces(){
   
    return this.plservice.AfficherPlaces().subscribe(
      data => {
       
        this.places= data;
        this.count=this.places.length;
        //console.log('Nbs = '+this.users.length);
      }, error=>{
        console.log('Table vide ??????');
      }
     );
     
  }
  //Delete Place By Id

deletePlaceById(id): void {
  //this.submitted = true;
  
  this.plservice.deletePlaceId(id)
      .subscribe(result => {
        console.log(result);
        console.log('Iddddddd Delete By Id==== '+id);
       return this.getPlaces();
      },
      error => {
        console.log(error);
        console.log('Erreur de supp By Id===='+id);
      });
     
  
}

}
