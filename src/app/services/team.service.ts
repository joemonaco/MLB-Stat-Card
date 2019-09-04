import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PlayerDetail } from "../models/PlayerDetail";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getDetails(teamID: String): Observable<PlayerDetail[]> {
    let ROOT_URL =
    "http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='" + teamID + "'";

    return this.http.get<PlayerDetail[]>(ROOT_URL);
  }
}


