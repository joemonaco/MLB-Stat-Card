import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PlayerDetailComponent } from "./components/player-detail/player-detail.component";
import { TeamsComponent } from "./components/teams/teams.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "details/:playerID/:firstName/:lastName/:teamID",
    component: PlayerDetailComponent
  },
  {
    path: "teams",
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
