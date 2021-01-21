import { Component } from "@angular/core";

@Component({
    selector: "app-voiture",
    templateUrl: "./voiture.component.html",
    styleUrls : ["./voiture.component.css"]
})

export class voitureComponent{
    voiture:{marque:string,nomButton:string}[]= [{marque:"Opel",nomButton:"demarrer"},{marque:"BMW",nomButton:"demarrer"},{marque:"MERCEDES",nomButton:"demarrer"},];
    
   
  

    changeStatuButton(marque:string){
     
       for (const value of this.voiture) {
           if(marque==value.marque){
               if(value.nomButton=="demarrer"){
                   value.nomButton="arreter";
               }else{
                value.nomButton="demarrer";
               }
           }
       }
       
    }
}