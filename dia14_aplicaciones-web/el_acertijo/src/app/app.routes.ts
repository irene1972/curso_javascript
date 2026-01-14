import { Routes } from '@angular/router';
import { C404 } from './components/c404/c404';
import { Main } from './components/main/main';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'home'},
    {path:'home',component:Main},
    {path:'**',component:C404}
];
