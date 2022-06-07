import { Booking } from "./booking.model";

export interface Dialog {
  title: string;
  message: string;
  booking?: Booking
  showCancel: boolean;
}
