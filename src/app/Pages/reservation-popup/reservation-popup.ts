import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-popup',
  imports: [],
  templateUrl: './reservation-popup.html',
  styleUrl: './reservation-popup.scss'
})
export class ReservationPopup {
  showPopup = true;

  closePopup() {
    this.showPopup = false;
  }
}
