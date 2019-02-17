import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { TeamDeliverable } from '../teamdeliverable';
import { Deliverable } from '../deliverable';
import { TeamdeliverableService } from '../teamdeliverable.service';
import {DeliverableService} from '../deliverable.service';

@Component({
  selector: 'app-teamdeliverable',
  templateUrl: './teamdeliverable.component.html',
  styleUrls: ['./teamdeliverable.component.css'],
})
export class TeamdeliverableComponent implements OnInit {
  today: number = Date.now();
  date: Date;
  teamDeliverables: TeamDeliverable[];
  teamDeliverable: TeamDeliverable;
  deliverables : Deliverable[];
  valids : Deliverable[];
  closeResult: string;


  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private teamDeliverableService: TeamdeliverableService,
    private deliverableService: DeliverableService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.date = new Date(this.today);
    const teamId = +this.route.snapshot.paramMap.get('id');
    this.getDeliverables();
    this.teamDeliverable = this.newTeamDeliverable(teamId);
    this.getTeamDeliverables(teamId);
  }

  deliverable_color(deadline: Date): boolean {
    if(!deadline) {
      return true;
    }
    if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.date, 'yyyy-MM-dd')) {
      return true;
    } else {
      return false;
    }
  }

  getTeamDeliverables(teamId): void {
    this.teamDeliverableService.getTeamDeliverables(teamId)
      .subscribe(teamDeliverables => this.teamDeliverables = teamDeliverables);
  }

  getDeliverables(): void {
    this.deliverableService.getDeliverables()
     .subscribe(deliverables => this.deliverables = deliverables);
  }

  newTeamDeliverable(teamId: number) : TeamDeliverable {
    var teamDeliverable = new TeamDeliverable();
    teamDeliverable.deliverable = null;
    teamDeliverable.team = teamId;
    teamDeliverable.deadline = null;
    return teamDeliverable;
  }

  onSubmit() : void {
    this.teamDeliverableService.addTeamDeliverable(this.teamDeliverable)
      .subscribe(teamDeliverable => {
        if (teamDeliverable) {
          this.teamDeliverables.unshift(teamDeliverable);
          this.teamDeliverable = this.newTeamDeliverable(teamDeliverable.team);
        }
      });
  }

  // isValid(deliverable): boolean {
  //   for (let teamDel of teamDeliverables) {
  //     if (deliverable.id == teamDel.deliverable) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  //
  // validDeliverables(deliverables: Deliverable[], teamDeliverables: TeamDeliverable[]) : Deliverable[] {
  //   let valids = this.deliverables.filter(isValid);
  //   console.log(valids);
  //   return valids;
  // }


  // Modal method
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

  // Modal method
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

}
