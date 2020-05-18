import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClimaComponent } from './clima/clima.component';
import { CiudadComponent } from './ciudad/ciudad.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    CiudadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
