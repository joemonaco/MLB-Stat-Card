import { Component, OnInit } from '@angular/core';

import { Row } from "../../row";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { SearchServiceService } from "../../services/search-service.service";
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit() {}

  players: Observable<Row[]>;
  value = "";
  buttonClicked = false;
  numReturned = -1;
  searchTerm = "";
  constructor(private searchService: SearchServiceService,private router: Router) {}

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

  doSomething(playerID: String) {
    console.log(playerID);
    this.router.navigate(['/details', playerID]);
  }

}
