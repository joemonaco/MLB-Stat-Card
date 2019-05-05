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
  playerTeamID: String;

  firstName: String;
  lastName: String;
  playerPhotoURL: String;
  playerLogoURL: String;

  details: Observable<PlayerDetail[]>;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerID = params["playerID"];
      this.firstName = params["firstName"];
      this.lastName = params["lastName"];
      this.playerTeamID = params["teamID"];

      this.playerLogoURL =
        "https://www.mlbstatic.com/mlb.com/builds/site-core/c6e9b7fc054c06b6fb6ee6358c484d49b479cc9b_1554990847/images/logos/team-primary-on-light/" +
        this.playerTeamID +
        ".svg";

      this.playerPhotoURL =
        "https://securea.mlb.com/mlb/images/players/head_shot/" +
        this.playerID +
        "@2x.jpg";
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
