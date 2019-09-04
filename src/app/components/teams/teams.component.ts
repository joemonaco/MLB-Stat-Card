import { Component, OnInit } from '@angular/core';
import {Logo} from '../../models/Logo';
import {TeamDetail} from '../../models/TeamDetail';
import { TeamService } from '../../services/team.service';
import { Router, ActivatedRoute, RouterModule } from "@angular/router";
import { Observable } from "rxjs";

import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {


  teamName = "Pick a Team!"
  logos: Logo[] = [];
  constructor(private teamService: TeamService, private sanitizer: DomSanitizer, private router: Router) { 
    
  }

  ngOnInit() {
    for (var i = 108; i < 122; i++) {
      let newLogo = {imgSrc: "https://www.mlbstatic.com/team-logos/" + i + ".svg", teamID: i };
      this.logos.push(newLogo);
    }
    for (var i = 133; i < 148; i++) {
      let newLogo = {imgSrc: "https://www.mlbstatic.com/team-logos/" + i + ".svg", teamID: i };
      this.logos.push(newLogo);
    }
    let newLogo = {imgSrc: "https://www.mlbstatic.com/team-logos/158.svg", teamID: 158};
    this.logos.push(newLogo);


  }

  details: Observable<TeamDetail[]>;

  showTeamData(id) {
    console.log("This teams id is ", id);
   let logosDiv = document.getElementById('logos');
   logosDiv.classList.add('hidden');
   
   
   this.teamService.getDetails(id).subscribe(data => {
    let res = data["roster_40"];
    let query = res["queryResults"];
    let row = query["row"];
    if (row != null) {
      this.details = row;
      console.log(this.details);
      this.teamName = this.details[0].team_name;
    }
  });

    
   
  }

  getPhoto(id: String) {
    let photoURL =
      "https://securea.mlb.com/mlb/images/players/head_shot/" + id + "@2x.jpg";

    return this.sanitizer.bypassSecurityTrustUrl(photoURL);
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
