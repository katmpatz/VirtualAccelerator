import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import { TeamdeliverableService }  from '../teamdeliverable.service';
import { DeliverableService }  from '../deliverable.service';
import { TeamDeliverable } from '../teamdeliverable';
import { Deliverable } from '../deliverable';


@Component({
  selector: 'app-teamdeliverable-detail',
  templateUrl: './teamdeliverable-detail.component.html',
  styleUrls: ['./teamdeliverable-detail.component.css']
})
export class TeamdeliverableDetailComponent implements OnInit {
    today: number = Date.now();
    date: Date;
    teamdeliverable: TeamDeliverable;
    deliverable: Deliverable;
    deliverable_id: number = null;
    files: any[];
    file: any;

  constructor(
    private route: ActivatedRoute,
    private teamdeliverableService: TeamdeliverableService,
    private deliverableService: DeliverableService,
    private location: Location,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.date = new Date(this.today);
    this.getTeamdeliverable();
  }

  getTeamdeliverable(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const team_id = +this.route.parent.snapshot.paramMap.get('id');
    this.teamdeliverableService.getTeamdeliverable(id, team_id)
      .subscribe(teamdeliverable => {this.teamdeliverable = teamdeliverable; this.deliverable_id = teamdeliverable.deliverable; this.getDeliverable(teamdeliverable.deliverable);});
  }

  getDeliverable(id: number) {
    this.deliverableService.getDeliverable(id)
      .subscribe(deliverable => this.deliverable = deliverable);
  }

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
    if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.date, 'yyyy-MM-dd')) {
      return true;
    } else {
      return false;
    }
  }

  onFileChange(event){
    this.files = event.target.files;
    // let reader = new FileReader();
    // if(event.target.files && event.target.files.length > 0) {
    //   let file = event.target.files[0];
    //   reader.readAsDataURL(file);
    //   reader.onload = () => {
    //     this.form.get('fileUpload').setValue({
    //       filename: file.name,
    //       filetype: file.type,
    //       value: reader.result.split(',')[1]
    //     })
    //   };
    // }
  }

  updateTeamDeliverable(teamdeliverableId: number) : TeamDeliverable {
   var teamdeliverable = new TeamDeliverable();
   teamdeliverable.deliverable = this.deliverable.id;
   teamdeliverable.team = this.teamdeliverable.team;
   teamdeliverable.deadline = this.teamdeliverable.deadline;
   teamdeliverable.delivery_day = this.date;
   teamdeliverable.status = true;
   teamdeliverable.file = '';
   return teamdeliverable;
 }

  onSubmit() : void {
    this.teamdeliverableService.updateTeamDeliverable(this.teamdeliverable)
      .subscribe( teamdel => this.teamdeliverable = teamdel);
  }

  clear() {
    this.files = [];
    this.ngOnInit();
  }


}
