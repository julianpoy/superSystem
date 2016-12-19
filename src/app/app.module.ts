import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

//Our main app component
import { AppComponent } from './app.component';

//Our Page components
import { HomeComponent } from './components/home/home.component';

import { FileScraperService } from './services/file-scraper/file-scraper.service';
import { EmulatorsService } from './services/emulators/emulators.service';

//Declare our routes
//https://angular.io/docs/ts/latest/guide/router.html
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
      RouterModule
  ],
  providers: [FileScraperService, EmulatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
