import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Row } from "../../app/row";
import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  players: Observable<Row[]>;

  constructor(private http: HttpClient) { }

  getPlayers(searchTerm: String): Observable<Row[]>{
    let ROOT_URL =
    "http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='" +
   searchTerm +
    "%25'";
    return this.http.get<Row[]>(ROOT_URL);
    console.log('returning null');
    // return this.players;
  }
}
