import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';

import { DeliverableService }  from '../deliverable.service';
import { TeamDeliverable } from '../teamdeliverable';
import { Deliverable } from '../deliverable';
import { TeamdeliverableService } from '../teamdeliverable.service';

@Component({
  selector: 'app-teamdel',
  templateUrl: './teamdel.component.html',
  styleUrls: ['./teamdel.component.css']
})
export class TeamdelComponent implements OnInit {
  @Input()
  team: number;

  today: number = Date.now();
  teamDeliverables: TeamDeliverable[];
  teamDeliverable: TeamDeliverable;

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private teamDeliverableService: TeamdeliverableService,
    private deliverableService: DeliverableService,
  ) { }

  ngOnInit() {
    const teamId = this.team;
    this.teamDeliverableService.getTeamDeliverables(teamId)
      .subscribe(teamDeliverables => this.teamDeliverables = teamDeliverables);
  }


  deliverable_color(deadline: Date): boolean {
    if(!deadline) {
      return true;
    }
    if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.today, 'yyyy-MM-dd')) {
      return true;
    } else {
      return false;
    }
  }

}
