import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { voitureComponent } from './voitures/voiture/voiture.component';
import { voituresComponent } from './voitures/voitures.component';
import { AjoutVoitureComponent } from './voitures/ajout-voiture/ajout-voiture.component';



@NgModule({
  declarations: [
    AppComponent,
    voitureComponent,
    voituresComponent,
    AjoutVoitureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
