import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  retrieveList(): Booking[] {
    const data = localStorage.getItem('bookingList');

    if (!data) {
      return [];
    }

    const bookingList: Booking[] = JSON.parse(data);
    return bookingList;
  }

  save(booking: Booking) {
    let bookingList: Booking[] = this.retrieveList();

    const nextId = bookingList[bookingList.length - 1] 
      ? (bookingList[bookingList.length - 1].id + 1) 
      : 1;
    booking.id = nextId;
    bookingList.push(booking);
    localStorage.setItem('bookingList', JSON.stringify(bookingList));
  }

  delete(booking: Booking) {
    const bookingList: Booking[] = this.retrieveList();
    let newBookingList: Booking[];

    if (bookingList.length > 0) {
      newBookingList = bookingList.filter(b => b.id !== booking.id);
      localStorage.setItem('bookingList', JSON.stringify(newBookingList));
    }
  }
}
