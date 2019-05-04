import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  playerID: String;

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.playerID = params['playerID']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

}
