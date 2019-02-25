import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { Profile } from '../profile';
import { TeamMember } from '../teamMember';
import { Coach } from '../coach';
import { Team } from '../team';
import { TeamMemberService } from '../team-member.service';
import { CoachService } from '../coach.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User();
  username: string;
  id = null;
  profile = new Profile();
  is_coach: boolean;
  is_team_member: boolean;
  teamMember: TeamMember;
  team: number;
  coach: Coach;
  editTeamMember: TeamMember;
  editCoach: Coach;
  editUser: User;
  photo: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private teamMemberService: TeamMemberService,
    private coachService: CoachService,
    private auth: AuthService
  ) { }

   ngOnInit() {
     this.user = JSON.parse(localStorage.getItem('user'));
     this.username = this.user.username;
     this.id = this.user.id;
     this.profile = this.user.profile;
     this.is_team_member = this.user.profile.is_team_member;
     this.is_coach = this.user.profile.is_coach;
     this.photo = this.user.profile.photo;
     console.log(this.user);
     if(this.user.profile.is_team_member) {
       this.teamMember = this.newTeamMember();
       this.getTeamMemberDetails(this.user.id);
     }
     if(this.user.profile.is_coach) {
       this.coach = this.newCoach();
       this.getCoachDetails(this.user.id);
     }
   }

   newTeamMember() : TeamMember {
     var teamMember = new TeamMember();
     teamMember.name = '';
     teamMember.team = this.team;
     // teamMember.photo = '';
     teamMember.email = '';
     teamMember.phone = '';
     teamMember.role = '';
     teamMember.field = '';
     return teamMember;
   }

   newCoach() : Coach {
     var coach = new Coach();
     coach.name = '';
     // teamMember.photo = '';
     coach.email = '';
     coach.phone = '';
     coach.organization = '';
     coach.field = '';
     coach.job_title = '';
     return coach;
   }

   getTeamMemberDetails(userId: number): void{
     this.teamMemberService.getTeamMember(userId)
       .subscribe(teamMember => {
         this.teamMember = teamMember;
         this.team = teamMember.team;
       });
   }

   getCoachDetails(userId: number): void{
     this.coachService.getCoach(userId)
       .subscribe(coach => this.coach = coach);
   }


   editTeamMemberMethod(teamMember) {
     teamMember.team = this.team;
     this.editTeamMember = teamMember;
   }

   editCoachMethod(coach) {
     this.editCoach = coach;
   }

   updateTeamMember() {
     if (this.editTeamMember) {
       this.editTeamMember.team = this.editTeamMember.team.id;
       this.teamMemberService.updateTeamMember(this.editTeamMember)
         .subscribe(teamMember => {
           this.teamMember = teamMember;
           let updatedUser = new User();
           updatedUser.id = teamMember.user;
           updatedUser.username = this.user.username;
           updatedUser.password = this.user.password;
           updatedUser.profile.name = teamMember.name;
           updatedUser.profile.email = teamMember.email;
           updatedUser.profile.phone = teamMember.phone;
           updatedUser.profile.is_team_member = this.is_team_member;
           updatedUser.profile.is_coach = this.is_coach;
           console.log(updatedUser);
           console.log(this.user);
           localStorage.remove('user');
           localStorage.setItem('user', JSON.stringify(updatedUser));

         });
       location.reload();
       this.editTeamMember = undefined;
     }
   }

   updateCoach() {
     if (this.editCoach) {
       this.coachService.updateCoach(this.editCoach)
         .subscribe(coach => {
           this.coach = coach;
           let updatedUser = new User();
           updatedUser.id = coach.user;
           updatedUser.username = this.user.username;
           updatedUser.password = this.user.password;
           updatedUser.profile.name = coach.name;
           updatedUser.profile.email = coach.email;
           updatedUser.profile.phone = coach.phone;
           updatedUser.profile.is_team_member = this.is_team_member;
           updatedUser.profile.is_coach = this.is_coach;
           localStorage.remove('user');
           localStorage.setItem('user', JSON.stringify(updatedUser));
         });
       this.editCoach = undefined;
     }
   }



}
