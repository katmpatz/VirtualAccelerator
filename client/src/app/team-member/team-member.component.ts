import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../teamMember';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  teamMembers = TEAMMEMBERS;
  selectedTeamMember : TeamMember;

  constructor() { }

  ngOnInit() {
  }

  onSelect(teamMember: TeamMember): void {
    this.selectedTeamMember = teamMember;
  }

}
