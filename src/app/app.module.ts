import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontColorDirective } from './directive/font-color.directive';
import { StandAloneBootComponent } from './stand-alone-boot/stand-alone-boot.component';

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }

/* Observações */
/*  */
