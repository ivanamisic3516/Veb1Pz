import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router'; 

import { AppComponent } from './app.component';
import { OnamaComponent } from './onama/onama.component';
import { KategorijeComponent } from './kategorije/kategorije.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItalyComponent } from './kategorije/italy/italy.component';

//export const router: Routes[
    //{path: '', redirectTo: 'onama', pathMatch: 'full'},
    [{path: 'onama', component: OnamaComponent},
    {path: 'kategorije', component: KategorijeComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'italy', component: ItalyComponent}
];