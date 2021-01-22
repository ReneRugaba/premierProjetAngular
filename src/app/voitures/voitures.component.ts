import { Component } from "@angular/core";

@Component({
    selector:"app-voitures",
    templateUrl:"./voitures.component.html",
    styleUrls:["./voitures.component.css"]
})

export class voituresComponent{
 title:string="Liste de voitures";
 voitures:{marque:string,status:string}[]=[
     {
         marque:"OPEL",
         status:"arreter"
     },
     {
        marque:"BMW",
        status:"arreter"
    },
    {
        marque:"MERCEDES",
        status:"arreter"
    }
 ];

    addNewCar(voiture:{marque: string, status: string}){
        this.voitures.push(voiture);
    }
}