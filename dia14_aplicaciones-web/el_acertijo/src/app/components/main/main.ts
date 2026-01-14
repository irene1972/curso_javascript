import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  cargarDato(formUser:any):void{
    const entrada=formUser.value.entrada;
    const random=Math.round(Math.random()*(10-1)+1);
    console.log(random);
    if(random===entrada){
      alert('Acertaste! los números son iguales');
    }else{
      alert(`Fallaste, la respuesta era ${random}`);
    }
  }
  controlDeNumeros(event:KeyboardEvent){
    console.log(event.key);
  }
}
