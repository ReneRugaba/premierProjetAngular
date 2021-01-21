import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { voitureComponent } from './voitures/voiture/voiture.component';
import { voituresComponent } from './voitures/voitures.component';

@NgModule({
  declarations: [
    AppComponent,
    voitureComponent,
    voituresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
