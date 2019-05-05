import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { Routes, RouterModule } from "@angular/router";

import { SearchServiceService } from "../app/services/search-service.service";
import { PlayerDetailsService } from "./services/player-details.service";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { PlayerDetailComponent } from "./components/player-detail/player-detail.component";
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, PlayerDetailComponent, TeamsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [SearchServiceService, PlayerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
