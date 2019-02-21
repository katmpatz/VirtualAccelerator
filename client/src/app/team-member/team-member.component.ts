import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TeamMember } from '../teamMember';
import { Team } from '../team';
import { User } from '../user';
import { TeamMemberService } from '../team-member.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  @Input()
  team: Team;

  teamMembers: TeamMember[];
  teamId: number;
  teamMember: TeamMember;
  editTeamMember: TeamMember; // the teammember currently being edited
  closeResult: string;
  user: User;


  constructor(
    private route: ActivatedRoute,
    private teamMemberService: TeamMemberService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    const teamIdUrl = +this.route.snapshot.paramMap.get('id');
    const team = this.team;
    this.teamId = team.id;
    this.teamMember = this.newTeamMember(team.id);
    if(teamIdUrl) {
      return this.teamMemberService.getTeamMembers(teamIdUrl)
        .subscribe(teamMembers => this.teamMembers = teamMembers);
    } else {
      return this.teamMemberService.getTeamMembers(team.id)
        .subscribe(teamMembers => this.teamMembers = teamMembers);
    }
  }

  newTeamMember(teamId: number) : TeamMember {
    var teamMember = new TeamMember();
    teamMember.name = '';
    teamMember.team = teamId;
    // teamMember.photo = '';
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
    // teamMember.team = +this.route.snapshot.paramMap.get('id');
    teamMember.team = this.team;
    console.log(teamMember.team);
    this.editTeamMember = teamMember;
  }

  update() {
    if (this.editTeamMember) {
      this.editTeamMember.team = this.editTeamMember.team.id;
      this.teamMemberService.updateTeamMember(this.editTeamMember)
        .subscribe(teamMember => {
          // replace the teamMember in the teamMembers list with update from server
          const ix = teamMember ? this.teamMembers.findIndex(tm => tm.user === teamMember.user) : -1;
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
