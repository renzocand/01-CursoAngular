import { Component, OnInit } from "@angular/core";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  constructor(private settings: SettingsService) {}

  ngOnInit() {
    document.getElementById("themecolors").addEventListener("click", e => {
      const target = e.target as HTMLTextAreaElement;
      const tema = target.getAttribute("data-theme");
      if (tema === null) {
        return false;
      }
      this.aplicarCheck(target);
      this.settings.aplicarTema(tema);
    });
    this.colocarCheck();
  }

  aplicarCheck(link: HTMLTextAreaElement) {
    const selectores = document.getElementsByClassName("selector");
    for (let i = 0; i < selectores.length; i++) {
      selectores[i].classList.remove("working");
    }
    link.classList.add("working");
  }

  colocarCheck() {
    const selectores = document.getElementsByClassName("selector");
    const tema = this.settings.ajustes.tema;

    for (let i = 0; i < selectores.length; i++) {
      if (selectores[i].getAttribute("data-theme") === tema) {
        selectores[i].classList.add("working");
        break;
      }
    }
  }
}
