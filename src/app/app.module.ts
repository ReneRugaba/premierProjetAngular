import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { voitureComponent } from './voitures/voiture/voiture.component';
import { voituresComponent } from './voitures/voitures.component';
import { AjoutVoitureComponent } from './voitures/ajout-voiture/ajout-voiture.component';
import { VoitureService } from './voiture.service';
import { DetailsVoitureComponent } from './details-voiture/details-voiture.component';
import { VoitureDirective } from './directive/voiture.directive';




@NgModule({
  declarations: [
    AppComponent,
    voitureComponent,
    voituresComponent,
    AjoutVoitureComponent,
    DetailsVoitureComponent,
    VoitureDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
