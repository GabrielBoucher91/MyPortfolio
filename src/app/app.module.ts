import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutEnglishComponent } from './about-english/about-english.component';
import { FirstLoadComponent } from './first-load/first-load.component';

@NgModule({
  declarations: [AppComponent, AboutEnglishComponent, FirstLoadComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
