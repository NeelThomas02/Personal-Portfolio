// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes }      from './app/app.routes';
import { MaterialModule } from './app/shared/material.module';

bootstrapApplication(AppComponent, {
  providers: [
    // Core Angular
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule),
    // Your shared Material imports
    importProvidersFrom(MaterialModule),
    // Routing
    provideRouter(routes),
  ]
});
