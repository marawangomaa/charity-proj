import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  imports: [CommonModule],
  templateUrl: './card-item.html',
  styleUrl: './card-item.scss'
})
export class CardItem {
  @Input() itemS!: any;
}
