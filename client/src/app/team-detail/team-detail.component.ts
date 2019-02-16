import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TeamService }  from '../team.service';

import { Team } from '../team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

    team: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeam();
    this.team = this.updateTeam();
  }

  updateTeam() : Team {
    var team = new Team();
    team.name = '';
    team.website = '';
    team.pipeline = '';
    team.maturity_level = null;
    team.tag_line = '';
    team.research_stream = false;
    team.coorporate_existance = false;
    team.date_of_entry = new Date();
    return team;
  }

  getTeam(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  onSubmit(): void {
  console.log(this.team);
  this.teamService.updateTeam(this.team)
    .subscribe(team => {
      if (team) {
        this.team = this.updateTeam();
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
