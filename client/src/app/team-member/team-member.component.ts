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
  editTeamMember: TeamMember;
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
    teamMember.email = '';
    teamMember.phone = '';
    teamMember.role = '';
    teamMember.field = '';
    return teamMember;
  }

  edit(teamMember) {
    teamMember.team = this.team;
    this.editTeamMember = teamMember;
  }

  update() {
    if (this.editTeamMember) {
      this.editTeamMember.team = this.editTeamMember.team.id;
      this.teamMemberService.updateTeamMember(this.editTeamMember)
        .subscribe(teamMember => {
          const ix = teamMember ? this.teamMembers.findIndex(tm => tm.user === teamMember.user) : -1;
          if (ix > -1) { this.teamMembers[ix] = teamMember; }
        });
      this.editTeamMember = undefined;
    }
  }

}
