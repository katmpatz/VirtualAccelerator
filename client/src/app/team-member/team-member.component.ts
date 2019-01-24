import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TeamMember } from '../teamMember';
import { TeamMemberService } from '../team-member.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  teamMembers: TeamMember[];

  teamMember: TeamMember;


  constructor(
    private route: ActivatedRoute,
    private teamMemberService: TeamMemberService
  ) { }

  ngOnInit() {
    const teamId = +this.route.snapshot.paramMap.get('id');
    // this.teamMember = this.newTeamMember(teamId);
    return this.teamMemberService.getTeamMembers(teamId)
      .subscribe(teamMembers => this.teamMembers = teamMembers);
  }

  // newTeamMember(teamId: number) : TeamMember {
  //   var teamMember = new TeamMember();
  //   teamMember.team = teamId;
  //   teamMember.name = '';
  //   // teamMember.photo = `../../assets/img/faces/${teamId}.png`;
  //   teamMember.email = '';
  //   teamMember.phone = '';
  //   return teamMember;
  // }
  //
  // onSubmit() : void {
  //   this.teamMemberService.addTeamMember(this.teamMember)
  //     .subscribe(teamMember => {
  //       if (teamMember) {
  //         this.teamMembers.unshift(teamMember);
  //         this.teamMember = this.newTeamMember(teamMember.team);
  //       }
  //     });
  // }

}
