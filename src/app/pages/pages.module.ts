import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";

import { SharedModule } from "../shared/shared.module";

import { PagesRoutingModule } from './pages.routes';

@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [CommonModule, SharedModule, PagesRoutingModule],
  exports: [NopagefoundComponent],
  providers: []
})
export class PagesModule {}
