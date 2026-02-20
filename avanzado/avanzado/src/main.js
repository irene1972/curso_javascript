import './style.css';
import { UsersApp } from './users/users-app';

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card"></div>
  </div>
`;
const element=document.querySelector('.card');

UsersApp(element);