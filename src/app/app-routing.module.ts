import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import {PruebasComponent} from "./pruebas/pruebas.component";

const routes: Routes = [
  { path: '', component:CalculadoraComponent },
  { path: 'inicio', component: AppComponent },
  { path: 'pruebas', component: PruebasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
