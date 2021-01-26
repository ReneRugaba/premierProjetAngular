import { Component } from "@angular/core";
import { VoitureService } from '../voiture.service';

@Component({
    selector:"app-voitures",
    templateUrl:"./voitures.component.html",
    styleUrls:["./voitures.component.css"]
})

export class voituresComponent{
 title:string="Liste de voitures";
 voitures:{marque:string,status:string}[]=[];

     constructor(private carService:VoitureService){}

     ngOnInit(){
         this.voitures= this.carService.getListeVoiture();
     }

    // addNewCar(voiture:{marque: string, status: string}){
    //     this.voitures.push(voiture);
    // }
}