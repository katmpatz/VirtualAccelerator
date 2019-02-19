import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { Profile } from '../profile';
import { TeamMember } from '../teamMember';
import { Coach } from '../coach';
import {UserService} from '../user.service';
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
  name = '';
  email = '';
  phone = '';
  is_coach: Boolean;
  is_team_member: Boolean;
  teamMember: TeamMember;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private auth: AuthService
  ) { }

   ngOnInit() {
     this.username = localStorage.getItem('username');
     this.user = JSON.parse(localStorage.getItem('user'));
     this.id = this.user.id;
     this.profile = this.user.profile;
     this.is_team_member = this.user.profile.is_team_member
     console.log(this.is_team_member);
   }



}
