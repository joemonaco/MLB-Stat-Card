import { Component } from "@angular/core";
import { Row } from "../app/row";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { SearchServiceService } from "../app/services/search-service.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  players: Observable<Row[]>;
  value = "";
  buttonClicked = false;
  numReturned = -1;
  searchTerm = "";
  constructor(private searchService: SearchServiceService) {}

  getData() {
    if (this.value != "") {
      
      this.searchTerm = this.value;
      
      this.searchService.getPlayers(this.searchTerm).subscribe(data => {
        let res = data["search_player_all"];
        let query = res["queryResults"];
        let row = query["row"];
        if(row != null) {
          this.numReturned = row.length;
          this.players = row;
          console.log(this.players);
        } else {
          this.numReturned = -1;
        }

        this.buttonClicked = true;
      })

    }
  }

  onEnter(v) {
    this.value = v;
  }
}
