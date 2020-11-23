import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { LocationsComponent } from './components/locations/locations.component';
import { RadioLocationComponent } from './components/radio-location/radio-location.component';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    MainScreenComponent,
    LocationsComponent,
    RadioLocationComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBwKM8DSEhphBp5OLwtTeaLMkl5FvErXps'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
