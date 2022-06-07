import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoRootModule } from '../../shared/modules/transloco-root.module'

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './components/booking/booking.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';

import { NgMaterialModule } from '../../shared/modules/ng-material.module';





@NgModule({
  declarations: [
    BookingComponent,
    BookingListComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    NgMaterialModule,
    TranslocoRootModule
  ],
  exports: [
    BookingComponent,
    BookingListComponent
  ]
})
export class BookingModule { }
