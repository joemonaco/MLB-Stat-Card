import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Row } from "../app/row";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  player: Observable<Row[]>;
  value = "";
  ROOT_URL = "";
  buttonClicked = false;
  numReturned = -1;
  searchTerm = "";
  constructor(private http: HttpClient) {}

  getData() {
    if (this.value != "") {
      this.searchTerm = this.value;
      this.ROOT_URL =
        "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" +
        this.searchTerm +
        "%25'";

      this.http.get<Row[]>(this.ROOT_URL).subscribe(data => {
        let res = data["search_player_all"];
        let query = res["queryResults"];
        let row = query["row"];
        if (row != null) {
          this.numReturned = row.length;
          this.player = row;
        } else {
          this.numReturned = -1;
        }
        console.log(this.player);
        this.buttonClicked = true;
      });
    }
  }

  onEnter(v) {
    this.value = v;
  }
}
