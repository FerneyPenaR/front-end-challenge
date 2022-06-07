import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Booking } from 'src/app/shared/models/booking.model';
import { BookingService } from '../../services/booking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { translate } from '@ngneat/transloco';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @ViewChild('picker') picker: any;

  form: FormGroup;
  dateControl: FormControl = new FormControl();
  public minDate = new Date();

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private router: Router) {

    this.form = this.fb.group({
      id: [0],
      origin: [null, [Validators.required]],
      destination: [null, [Validators.required]],
      passengers: [null, [Validators.required]],
      datetime: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  closePicker() {
    this.picker.cancel();
  }

  confirmSave(form: FormGroup): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: { 
        title: translate('booking.saveTitle'),
        message: translate('booking.saveMessage'),
        showCancel: true
      },
    });

    dialogRef.afterClosed().subscribe((dialogResponse) => {
      if(dialogResponse) {
        const booking: Booking = {
          ...form.value
        };
        this.saveDetails(booking);
      }
    });
  }

  saveDetails(booking: Booking) {
    this.bookingService.saveBooking(booking);
    this._snackBar.open(translate('messages.saveSuccessfuly'));
    this.router.navigate(['/booking/list']);
  }

}
