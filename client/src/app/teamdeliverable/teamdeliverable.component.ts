import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

import { TeamDeliverable } from '../teamdeliverable';
import { Deliverable } from '../deliverable';
import { TeamdeliverableService } from '../teamdeliverable.service';

@Component({
  selector: 'app-teamdeliverable',
  templateUrl: './teamdeliverable.component.html',
  styleUrls: ['./teamdeliverable.component.css'],
})
export class TeamdeliverableComponent implements OnInit {
  today: number = Date.now();
  teamDeliverables: TeamDeliverable[];
  teamDeliverable: TeamDeliverable;


  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private teamDeliverableService: TeamdeliverableService,
  ) { }

  ngOnInit() {
    const teamId = +this.route.snapshot.paramMap.get('id');
    return this.teamDeliverableService.getTeamDeliverables(teamId)
      .subscribe(teamDeliverables => this.teamDeliverables = teamDeliverables);
  }

  deliverable_color(deadline: Date): boolean {
    if(!deadline) {
      return true;
    }
    console.log(deadline);
    console.log(this.datePipe.transform(this.today, 'yyyy-MM-dd'));
    console.log(deadline < this.datePipe.transform(this.today, 'yyyy-MM-dd'));
    if (deadline > this.datePipe.transform(this.today, 'yyyy-MM-dd')) {
      return true;
    } else {
      return false;
    }
  }

}
