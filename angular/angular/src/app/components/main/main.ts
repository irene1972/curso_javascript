import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  contador: number = 0;

  incrementar() {
    if (this.contador < 10) {
      this.contador += 1
    }

  }

  decrementar() {
    if (this.contador > 0) {
      this.contador -= 1
    }

  }
}
