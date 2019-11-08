import { Component, OnInit } from "@angular/core";

import { SearchedPlayer } from "../../models/SearchedPlayer";
import { Observable } from "rxjs";
import { SearchServiceService } from "../../services/search-service.service";
import { Router } from "@angular/router";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
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

  ngOnInit() { }

  getPhoto(id: String) {
    let photoURL =
      "https://securea.mlb.com/mlb/images/players/head_shot/" + id + "@2x.jpg";

    return this.sanitizer.bypassSecurityTrustUrl(photoURL);
  }

  getData() {
    this.searchTerm = this.value;

    if (this.searchTerm != "") {
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
    } else {
      this.players = <any>[];
      this.numReturned = -2;
      this.buttonClicked = true;
    }
  }

  onEnter(v) {
    this.value = v;
    this.getData();
  }

  showDetails(
    playerID: String,
    firstName: String,
    lastName: String,
    teamID: String
  ) {
    this.router.navigate(["/details", playerID, firstName, lastName, teamID]);
  }
}
