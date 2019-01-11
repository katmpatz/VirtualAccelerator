import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Team } from '../team';
import {TeamService} from '../team.service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams : Team[];

  // team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private datePipe: DatePipe
  ) { }

   ngOnInit() {
     this.getTeams();
     // this.team = this.newTeam();
     // return this.teamService.getTeams()
     //  .subscribe(teams => this.teams = teams);

   }

   getTeams(): void {
     this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
   }

  //  newTeam() : Team {
  //   var team = new Team();
  //   team.name = '';
  //   // team.photo = '';
  //   team.pipeline = '';
  //   team.website = '';
  //   team.tag_line = '';
  //   team.teammembers.name = '';
  //   team.date_of_entry = new Date();
  //   return team;
  // }
  //
  // onSubmit() : void {
  //   this.teamService.addTeam(this.team)
  //     .subscribe(team => {
  //       if (team) {
  //         this.teams.unshift(team);
  //         this.team = this.newTeam();
  //       }
  //     });
  // }

   add(idStr: String, name: String, pipeline: String, maturity_levelStr: string, dateStr: string): void {
      // let id = +idStr;
      name = name.trim();
      pipeline = pipeline.trim();
      let maturity_level = +maturity_levelStr;
      let date = new Date(dateStr);
      let date_of_entry = this.datePipe.transform(date,"yyyy-MM-dd");
      if (!name || !pipeline || !maturity_level) { return; }
      this.teamService.addTeam({name, pipeline, maturity_level, date_of_entry } as Team)
        .subscribe(team => {
          // If the operation has failed, TeamService's handleError()
          // will have given an empty result; so we add to the
          // teams array only if a non-empty result has been produced.
          if (team) {
            this.teams.push(team);
          }
        });
    }

    delete(team: Team): void {
      this.teams = this.teams.filter(h => h !== team);
      this.teamService.deleteTeam(team).subscribe();
    }

}
