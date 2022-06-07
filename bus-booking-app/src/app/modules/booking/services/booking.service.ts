import { Injectable } from '@angular/core';
import { Booking } from 'src/app/shared/models/booking.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private apiService: ApiService) { }

  getBookingList(): Booking[] {
    return this.apiService.retrieveList();
  }

  saveBooking(booking: Booking): void {
    this.apiService.save(booking);
  }

  deleteBooking(booking: Booking): void {
    this.apiService.delete(booking);
  }
}
