import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SessionListComponent } from './session/session-list/session-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    NavbarComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
