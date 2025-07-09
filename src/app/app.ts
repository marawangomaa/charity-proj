import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './Pages/Home/Components/nav/nav';
import { Footer } from "./Shared/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'CharityFE';
}
