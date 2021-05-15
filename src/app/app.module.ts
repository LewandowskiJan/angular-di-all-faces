import { FloraModule } from './modules/lazy/flora/flora.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnimalModule } from './modules/eager/animal/animal.module';
import { BiomeModule } from './modules/lazy/biome/biome.module';
import { EarthModule } from './modules/eager/earth/earth.module';
import { WeatherModule } from './modules/eager/weather/weather-eager-module.module';

import { ENVIRONMENT } from './token/environment.token';

import { MaterialModule } from './util/material/material.module';
import { ContentModule } from './modules/shared/content/content.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AnimalModule,
    WeatherModule,
    EarthModule,
    ContentModule,
  ],
  providers: [{ provide: ENVIRONMENT, useValue: environment }],
  bootstrap: [AppComponent],
})
export class AppModule {}
