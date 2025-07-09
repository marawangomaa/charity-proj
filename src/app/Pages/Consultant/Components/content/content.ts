import { Component, inject } from '@angular/core';
import { CardItem } from "../card-item/card-item";
import { Advisor } from '../../../../Services/advisor';
import { IAdvisor } from '../../../../Interfaces/advisor';

@Component({
  selector: 'app-content-consultant',
  imports: [CardItem],
  templateUrl: './content.html',
  styleUrl: './content.scss'
})
export class ContentConsultant {

  advisors! : IAdvisor[];

  _advisor = inject(Advisor)

  ngOnInit(): void {
    this._advisor.getAllAdvisors().subscribe({
      next: (data) => {
        this.advisors = data;
        console.log('Advisors fetched successfully:', this.advisors);
        
      },
      error: (err) => {
        console.error('Error fetching advisors:', err);
        console.log('Error fetching advisors:', err);
        
      }
    });
  }

}
