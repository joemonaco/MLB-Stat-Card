import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SearchedPlayer } from "../models/SearchedPlayer";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchServiceService {
  constructor(private http: HttpClient) {}

  getPlayers(searchTerm: String): Observable<SearchedPlayer[]> {
    let ROOT_URL =
      "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" +
      searchTerm +
      "%25'";
    return this.http.get<SearchedPlayer[]>(ROOT_URL);
  }
}
