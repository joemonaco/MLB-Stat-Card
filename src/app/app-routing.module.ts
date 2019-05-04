import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {PlayerDetailComponent} from './components/player-detail/player-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
      path: 'details/:playerID',
      component: PlayerDetailComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
