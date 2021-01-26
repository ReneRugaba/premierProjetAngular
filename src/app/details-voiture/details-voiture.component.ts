import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-details-voiture',
  templateUrl: './details-voiture.component.html',
  styleUrls: ['./details-voiture.component.css']
})
export class DetailsVoitureComponent implements OnInit {
  detailsVoiture:{marque:string,status:string};

  constructor(private VoitureService:VoitureService) {
   this.VoitureService.eventdetailsVoiture.subscribe(marque=>{
     this.detailsVoiture=this.VoitureService.getDetailVoiture(marque);
   })
  }

  ngOnInit(): void {
    
  }

}
