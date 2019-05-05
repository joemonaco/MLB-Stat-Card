import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, RouterModule } from "@angular/router";
import { Observable } from "rxjs";
import { PlayerDetail } from "src/app/models/PlayerDetail";
import { PlayerDetailsService } from "../../services/player-details.service";

@Component({
  selector: "app-player-detail",
  templateUrl: "./player-detail.component.html",
  styleUrls: ["./player-detail.component.scss"]
})
export class PlayerDetailComponent implements OnInit {
  constructor(
    private detailService: PlayerDetailsService,
    private route: ActivatedRoute
  ) {}

  playerID: String;

  firstName: String;
  lastName: String;

  details: Observable<PlayerDetail[]>;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerID = params["playerID"];
      this.firstName = params["firstName"];
      this.lastName = params["lastName"];
      this.detailService.getDetails(this.playerID).subscribe(data => {
        let res = data["sport_hitting_tm"];
        let query = res["queryResults"];
        let row = query["row"];
        if (row != null) {
          this.details = row;
          console.log(this.details);
        }
      });
    });
  }
}
