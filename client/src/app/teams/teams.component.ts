import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team: Team = {
    id: 1,
    name: 'Inagros',
    pipeline: 'Ennovation',
    research_stream: true,
    maturity_level: 4,
    date_of_entry: 2017,
    website: 'https://unichallenge.gr/',
    coorporate_existance: false,
    active: true,
    tag_line: 'We are awsome!'
  }

  constructor() { }

  ngOnInit() {
  }

}
