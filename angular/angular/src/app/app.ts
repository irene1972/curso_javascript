import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from './components/main/main';
import { Hobies } from './components/hobies/hobies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main,Hobies],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
