import { Component, OnInit } from '@angular/core';

declare function initPlugin():any

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
    initPlugin()
  }

}
