import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team';
import { User } from '../user';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  @Input()
  team: Team;

  user: User;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    const team = this.team;
  }

}
