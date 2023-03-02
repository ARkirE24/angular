import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  texto = "0"

  textoMemoria = ""

  resultado = 0

  funcionBorrar(){
    if (this.texto.length == 1) this.texto = '0'
    else if (this.texto.charAt(this.texto.length - 1) == ' ') this.texto = this.texto.substring(0, this.texto.length - 3)
    else this.texto = this.texto.substring(0, this.texto.length - 1)
  }

  funcionBorrarTodo(){
    this.texto = "0"
    this.resultado = 0;
  }

  funcionIgual(){
    if(this.texto.charAt(this.texto.length - 1) != ' ') {
      if (math.evaluate(this.texto) % 1 != 0) this.resultado = (math.evaluate(this.texto)).toFixed(2)
      else this.resultado = math.evaluate(this.texto)
      this.texto = this.resultado.toString()
    }

  }

  funcionTeclaNumero(palabra:string){
    if ((this.texto.length == 1 && this.texto == '0') || (this.texto.length == 2 && this.texto == '00')){
      this.texto = "" + palabra;
    }
    else if (this.texto.charAt(this.texto.length - 1) == ' ' && palabra.charAt(palabra.length - 1) == ' ') {
      this.texto = this.texto
    }
    else if (palabra == '.' && this.texto.charAt(this.texto.length - 1) != ' ' && this.texto.charAt(this.texto.length - 1) != '.'){
      this.texto = this.texto + palabra
    }
    else {
      this.textoMemoria = this.texto
      this.texto = this.texto + palabra
    }
  }

}
