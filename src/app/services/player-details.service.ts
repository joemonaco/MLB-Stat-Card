import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PlayerDetail } from "../models/PlayerDetail";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlayerDetailsService {
  constructor(private http: HttpClient) {}

  getDetails(playerID: String): Observable<PlayerDetail[]> {
    let ROOT_URL =
      "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2019'&player_id='" +
      playerID +
      "'";

    return this.http.get<PlayerDetail[]>(ROOT_URL);
  }
}
