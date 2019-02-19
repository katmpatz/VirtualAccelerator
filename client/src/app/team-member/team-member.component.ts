import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TeamMember } from '../teamMember';
import { TeamMemberService } from '../team-member.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  teamMembers: TeamMember[];
  team: number;
  teamMember: TeamMember;
  editTeamMember: TeamMember; // the hero currently being edited
  closeResult: string;

  constructor(
    private route: ActivatedRoute,
    private teamMemberService: TeamMemberService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    const teamId = +this.route.snapshot.paramMap.get('id');
    this.team = teamId;
    this.teamMember = this.newTeamMember(teamId);
    return this.teamMemberService.getTeamMembers(teamId)
      .subscribe(teamMembers => this.teamMembers = teamMembers);
  }

  newTeamMember(teamId: number) : TeamMember {
    var teamMember = new TeamMember();
    teamMember.name = '';
    teamMember.team = teamId;
    // teamMember.photo = `../../assets/img/faces/${teamId}.png`;
    teamMember.email = '';
    teamMember.phone = '';
    teamMember.role = '';
    teamMember.field = '';
    return teamMember;
  }

  onSubmit() : void {
    this.teamMemberService.addTeamMember(this.teamMember)
      .subscribe(teamMember => {
        if (teamMember) {
          this.teamMembers.unshift(teamMember);
          this.teamMember = this.newTeamMember(teamMember.team);
        }
      });
  }

  edit(teamMember) {
    console.log(teamMember);
    teamMember.team = +this.route.snapshot.paramMap.get('id');
    console.log(teamMember);
    this.editTeamMember = teamMember;
  }

  update() {
    if (this.editTeamMember) {
      console.log(this.editTeamMember);
      this.teamMemberService.updateTeamMember(this.editTeamMember)
        .subscribe(teamMember => {
          // replace the teamMember in the teamMembers list with update from server
          const ix = teamMember ? this.teamMembers.findIndex(h => h.user === teamMember.user) : -1;
          if (ix > -1) { this.teamMembers[ix] = teamMember; }
        });
      this.editTeamMember = undefined;
    }
  }

  delete(teamMember: TeamMember): void {
    this.teamMembers = this.teamMembers.filter(h => h !== teamMember);
    this.teamMemberService.deleteTeamMember(teamMember).subscribe();
  }


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
