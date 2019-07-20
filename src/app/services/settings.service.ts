import {  Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';


export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: "./assets/css/colors/default.css",
    tema: "default"
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.leerAjustes()
  }


  guardarAjustes() {
    localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
    // console.log("Tema guardado");
  }

  leerAjustes() {
    if (localStorage.getItem("ajustes")) {
      this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
      this.aplicarTema(this.ajustes.tema)
      // console.log("Leyendo Ajustes");
    } else {
      this.aplicarTema(this.ajustes.tema)
      // console.log("Ajustes por defecto");
    }
  }

  aplicarTema(tema: string) {
    let url = `./assets/css/colors/${tema}.css`;
    this._document.getElementById("theme").setAttribute("href", url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
