import { Component, OnInit } from "@angular/core";

import { SearchedPlayer } from "../../models/SearchedPlayer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SearchServiceService } from "../../services/search-service.service";
import { RouterModule, Router } from "@angular/router";
import { last } from "@angular/router/src/utils/collection";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  ngOnInit() {}

  players: Observable<SearchedPlayer[]>;
  value = "";
  buttonClicked = false;
  numReturned = -1;
  searchTerm = "";

  constructor(
    private searchService: SearchServiceService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  getPhoto(id: String) {
    let photoURL =
      "https://securea.mlb.com/mlb/images/players/head_shot/" + id + "@2x.jpg";

    return this.sanitizer.bypassSecurityTrustUrl(photoURL);
  }
  getData() {
    if (this.value != "") {
      this.searchTerm = this.value;

      this.searchService.getPlayers(this.searchTerm).subscribe(data => {
        let res = data["search_player_all"];
        let query = res["queryResults"];
        let row = query["row"];
        if (row != null) {
          this.numReturned = row.length;
          this.players = row;
          console.log(this.players);
        } else {
          this.numReturned = -1;
        }

        this.buttonClicked = true;
      });
    }
  }

  onEnter(v) {
    this.value = v;
  }

  showDetails(
    playerID: String,
    firstName: String,
    lastName: String,
    teamID: String
  ) {
    console.log(playerID);
    this.router.navigate(["/details", playerID, firstName, lastName, teamID]);
  }
}
