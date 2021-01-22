import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.css']
})
export class AjoutVoitureComponent implements OnInit {
  @Output() eventAddCar= new EventEmitter<{marque: string, status: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewCar(value:string){
    this.eventAddCar.emit({marque: value, status: "arreter"});
 }
}
