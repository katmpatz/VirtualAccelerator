import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TeamdeliverableService }  from '../teamdeliverable.service';

import { TeamDeliverable } from '../teamdeliverable';

@Component({
  selector: 'app-teamdeliverable-detail',
  templateUrl: './teamdeliverable-detail.component.html',
  styleUrls: ['./teamdeliverable-detail.component.css']
})
export class TeamdeliverableDetailComponent implements OnInit {

    teamdeliverable: TeamDeliverable;

  constructor(
    private route: ActivatedRoute,
    private teamdeliverableService: TeamdeliverableService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTeamdeliverable();
  }

  getTeamdeliverable(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const team_id = +this.route.parent.snapshot.paramMap.get('id');
    this.teamdeliverableService.getTeamdeliverable(id, team_id)
      .subscribe(teamdeliverable => this.teamdeliverable = teamdeliverable);
  }

  // save(): void {
  // this.teamdeliverableService.updateTeamdeliverable(this.teamdeliverable)
  //   .subscribe(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
