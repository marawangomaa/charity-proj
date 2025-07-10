import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservationPopup } from "../reservation-popup/reservation-popup";

@Component({
  selector: 'app-reservation',
  imports: [RouterLink, ReservationPopup],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss'
})
export class Reservation {
  showPopup = false;

  onConfirmReservation() {
    this.showPopup = true;
  }
}
