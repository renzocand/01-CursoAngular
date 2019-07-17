import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChartsModule } from 'ng2-charts';

import { FormsModule } from "@angular/forms";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";

import { SharedModule } from "../shared/shared.module";

import { PagesRoutingModule } from "./pages.routes";

//TEMPORAL
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports: [NopagefoundComponent],
  providers: []
})
export class PagesModule {}
