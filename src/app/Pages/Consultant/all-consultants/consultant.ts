import { Component } from '@angular/core';
import { HeaderComponentConsultant } from "../Components/header-component-consultant/header-component-consultant";
import { ContentConsultant } from '../Components/content/content';

@Component({
  selector: 'app-consultant',
  imports: [ HeaderComponentConsultant, ContentConsultant],
  templateUrl: './consultant.html',
  styleUrl: './consultant.scss'
})
export class Consultant {

}
