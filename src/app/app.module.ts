import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app.routes';

import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { SettingsService } from './services/settings.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
