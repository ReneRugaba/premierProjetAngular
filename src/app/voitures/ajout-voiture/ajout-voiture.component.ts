import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { VoitureService } from '../../voiture.service';

@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.css']
})
export class AjoutVoitureComponent implements OnInit {
  // @Output() eventAddCar= new EventEmitter<{marque: string, status: string}>();
  carServ:VoitureService;
  constructor(private carService:VoitureService) { }

  ngOnInit(): void {
    this.carServ=this.carService;
  }

  addNewCar(value:string){
    this.carServ.addCar({marque: value, status: "arreter"});
 }
}
