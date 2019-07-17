import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje1:number = 20;
  porcentaje2:number = 60;
  leyenda:string = 'Leyenda'

  constructor() { 
  }

  ngOnInit() {
  }

  // cambiarValor(valor:number){
    
  //   if(this.porcentaje >= 100 && valor>=0){
  //     this.porcentaje = 100
  //     return false
  //   }

  //   if(this.porcentaje <= 0 && valor<0){
  //     this.porcentaje = 0
  //     return false
  //   }

  //   this.porcentaje += valor;
  // }


}
