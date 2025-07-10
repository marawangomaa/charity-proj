import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPopup } from './reservation-popup';

describe('ReservationPopup', () => {
  let component: ReservationPopup;
  let fixture: ComponentFixture<ReservationPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
