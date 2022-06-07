import { AppPages } from "../enums/app-pages.enum";
import { Page } from "../models/nav-bar.model";

export const Pages: Page[] = [
  {
    path: AppPages.booking,
    tooltip: 'booking.title',
  },
  {
    path: AppPages.bookingList,
    tooltip: 'booking.list',
  }
];
