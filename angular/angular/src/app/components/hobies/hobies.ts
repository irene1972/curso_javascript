import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IHobby } from '../../interfaces/ihobby';

@Component({
  selector: 'app-hobies',
  imports: [FormsModule],
  templateUrl: './hobies.html',
  styleUrl: './hobies.css',
})
export class Hobies {
  hobby:IHobby={nombre: '', hobby: ''};
  arrayHobbies:IHobby[]=[]

  enviarDatos(){
    this.arrayHobbies.push({...this.hobby});
  }
}
