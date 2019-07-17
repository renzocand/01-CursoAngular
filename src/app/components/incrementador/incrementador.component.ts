import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', null) txtProgress:ElementRef

  @Input() porcentaje:number;
  @Input() leyenda:string;

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue:number){
    
    // let elementHtml:any = document.getElementsByName('porcentaje')
    // console.log(this.txtProgress);

    if(newValue > 100){
      this.porcentaje = 100
    }

    else if(newValue <= 0){
      this.porcentaje = 0
    }
    else{
      this.porcentaje = newValue
    }
    this.txtProgress.nativeElement.value = this.porcentaje
    this.cambioValor.emit(this.porcentaje)
  }

  cambiarValor(valor:number){ 
    
    if(this.porcentaje >= 100 && valor>=0){
      this.porcentaje = 100
      return false
    }

    if(this.porcentaje <= 0 && valor<0){
      this.porcentaje = 0
      return false
    }

    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje)

    this.txtProgress.nativeElement.focus()
  }

}
