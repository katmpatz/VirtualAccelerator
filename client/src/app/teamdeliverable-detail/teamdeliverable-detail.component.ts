import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import { TeamdeliverableService }  from '../teamdeliverable.service';

import { TeamDeliverable } from '../teamdeliverable';


@Component({
  selector: 'app-teamdeliverable-detail',
  templateUrl: './teamdeliverable-detail.component.html',
  styleUrls: ['./teamdeliverable-detail.component.css']
})
export class TeamdeliverableDetailComponent implements OnInit {
    today: number = Date.now();
    teamdeliverable: TeamDeliverable;
    files: any[];

  constructor(
    private route: ActivatedRoute,
    private teamdeliverableService: TeamdeliverableService,
    private location: Location,
    private datePipe: DatePipe,
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

  deadline_status(deadline: Date): boolean {
    if(!deadline) {
      return true;
    }
    if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.today, 'yyyy-MM-dd')) {
      return true;
    } else {
      return false;
    }
  }

  onFileChange(event){
    this.files = event.target.files;
    console.log(event);
  }

  updateTeamDeliverable(teamdeliverableId: number) : TeamDeliverable {
   var teamdeliverable = new TeamDeliverable();
   teamdeliverable.deliverable = this.teamdeliverable.deliverable.id;
   teamdeliverable.team = this.teamdeliverable.team;
   teamdeliverable.deadline = this.teamdeliverable.deadline;
   teamdeliverable.delivery_day = this.today;
   teamdeliverable.status = true;
   teamdeliverable.file = '';
   return teamdeliverable;
 }

  onSubmit() : void {
    console.log(this.teamdeliverable.deliverable.id);
    this.teamdeliverableService.updateTeamDeliverable(this.teamdeliverable)
      .subscribe(() => this.clear());
  }

  clear() {
    this.files = [];
    this.ngOnInit();
  }


}
