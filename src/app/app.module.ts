import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KategorijeComponent } from './kategorije/kategorije.component';
import { OnamaComponent } from './onama/onama.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { ItalyComponent } from './kategorije/italy/italy.component';

const appRoutes: Routes = [
  {path: 'onama', component: OnamaComponent},
  {path: 'kategorije', component: KategorijeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'italy', component: ItalyComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    KategorijeComponent,
    OnamaComponent,
    SignUpComponent,
    ItalyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
