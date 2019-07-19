import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


  constructor( @Inject(DOCUMENT) public _document ) { }

  ngOnInit() {
    const temas = document.getElementById('themecolors')

    temas.addEventListener('click', (e)=>{
      
      // console.log(e.target.classList);

      this.aplicarCheck(e.target)

      if(e.target.getAttribute('data-theme') === null){
        return false;
      }
      let colorTema = e.target.getAttribute('data-theme')
      let url = `assets/css/colors/${colorTema}.css`

      this._document.getElementById('theme').setAttribute('href', url)
    })
  }

 aplicarCheck(link:any){
  let selector = document.getElementsByClassName('selector')
  
  for(let i = 0; i<selector.length; i++){
    selector[i].classList.remove('working')
  }
  link.classList.add('working')
 }
  

}
