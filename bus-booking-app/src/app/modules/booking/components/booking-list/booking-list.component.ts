import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { translate } from '@ngneat/transloco';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { Booking } from 'src/app/shared/models/booking.model';
import { BOOKING_LIST_COLUMNS } from '../../constants/booking-list-columns.constant';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  bookingList: Booking[] = [];
  displayedColumns = BOOKING_LIST_COLUMNS;

  constructor(
    private bookingService: BookingService, 
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: Router) {
    this.getBookingList();
   }

  ngOnInit(): void {
  }

  createBooking() {
    this.route.navigate(['/booking/create']);
  }

  showBooking(booking: Booking): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { 
        title: translate('booking.showTitle'),
        message: translate('booking.showMessage'),
        booking,
        showCancel: false
      },
    });

    dialogRef.afterClosed().subscribe((dialogResponse) => {
    });
  }

  deleteBookingConfirmation(booking: Booking): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { 
        title: translate('booking.deleteTitle'),
        message: translate('booking.deleteMessage'),
        booking,
        showCancel: true
      },
    });

    dialogRef.afterClosed().subscribe((dialogResponse) => {
      if(dialogResponse) {
        this.deleteBooking(booking);
      }
    });
  }


  getBookingList() {
    this.bookingList = this.bookingService.getBookingList();
  }

  deleteBooking(booking: Booking) {
    this.bookingService.deleteBooking(booking);
    this._snackBar.open(translate('messages.deletesuccessfuly'));
    this.getBookingList();
  }

}
