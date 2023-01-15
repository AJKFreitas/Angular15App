import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { StandAloneBootComponent } from './app/stand-alone-boot/stand-alone-boot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
bootstrapApplication(StandAloneBootComponent, {
    providers: [importProvidersFrom(BrowserAnimationsModule)]
})