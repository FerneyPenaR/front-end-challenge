import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './shared/modules/ng-material.module';


import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './shared/modules/transloco-root.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { HomeComponent } from './components/home/home.component'
import { BookingModule } from './modules/booking/booking.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    TranslocoRootModule,
    HttpClientModule,
    BookingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
