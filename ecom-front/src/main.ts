/*
  import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app';
  import { importProvidersFrom } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule)]
  }).catch(err => console.error(err));
*/

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule)]
}).catch(err => console.error(err));


