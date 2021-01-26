import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
listeVoitures:{marque:string,status:string}[]= [
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

eventdetailsVoiture=new EventEmitter<string>();

  getListeVoiture(){
    return this.listeVoitures;
  }

 

  addCar(voiture:{marque:string,status:string}){
    this.getListeVoiture().push(voiture);
  }

  detailsVoiture(voiture:{marque:string,status:string}){
        this.eventdetailsVoiture.emit(voiture.marque);
  }

  getDetailVoiture(marque:string){
    for (const value of this.listeVoitures) {
      if(marque==value.marque){
        return value;
      }
    }
  }
}
