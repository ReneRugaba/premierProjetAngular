import { Component, EventEmitter, Input, Output } from "@angular/core";
import { VoitureService } from '../../voiture.service';

@Component({
    selector: "app-voiture",
    templateUrl: "./voiture.component.html",
    styleUrls : ["./voiture.component.css"]
})

export class voitureComponent{
    @Input() laVoiture:{marque:string,status:string};
    // @Output() eventVoitureDetail = new EventEmitter<{marque: string,status: string}>();
    CarService:VoitureService;

    constructor(private CarServ: VoitureService){
        this.CarService = CarServ;
    }
   
    changeStatuButton(){
               if(this.laVoiture.status=="demarrer"){
                this.laVoiture.status="arreter";
               }else if(this.laVoiture.status=="arreter"){
                this.laVoiture.status="demarrer";
               }
           }

    returnDetails(voiture:{marque: string, status: string}){
        this.CarService.detailsVoiture(voiture);
    }
}