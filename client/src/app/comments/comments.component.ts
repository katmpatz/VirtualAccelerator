import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { TeamDeliverable } from '../teamdeliverable';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';
import { TeamMemberService } from '../team-member.service';
import { CoachService } from '../coach.service';
import { User } from '../user';
import { Profile } from '../profile';
import { Coach } from '../coach';
import { TeamMember } from '../teamMember';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  teamId: number;

  today: number = Date.now();
  date: Date;
  comments: Comment[];
  comment: Comment;
  teamdeliverable= +this.route.snapshot.paramMap.get('id');
  user = JSON.parse(localStorage.getItem('user'));
  profile = this.user.profile;
  photo = this.user.profile.photo;
  coach: Coach;
  is_coach: boolean;
  is_team_member: boolean;

  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    // private teamDeliverableService: TeamdeliverableService,
    private commentsService: CommentsService,
    // private modalService: NgbModal
    private teamMemberService: TeamMemberService,
    private coachService: CoachService,
  ) { }

  ngOnInit() {
    this.date = new Date(this.today);
    const teamId = this.teamId;
    this.teamdeliverable = +this.route.snapshot.paramMap.get('id');
    // this.comment = this.newComment();
    this.getComments(this.teamdeliverable, teamId);
    this.user = JSON.parse(localStorage.getItem('user'));
    this.profile = this.user.profile;
    this.is_team_member = this.user.profile.is_team_member;
    this.is_coach = this.user.profile.is_coach;
    if(this.user.profile.is_coach) {
      this.getCoachDetails(this.user.id);
      this.comment = this.newComment(this.teamdeliverable, this.user.id);
    }

  }


  getCoachDetails(userId: number): void{
    this.coachService.getCoach(userId)
      .subscribe(coach => {
        this.coach = coach
        this.photo = coach.photo;
      });
  }

  getComments(teamdeliverableId: number, teamId: number): void {
    this.commentsService.getComments(teamdeliverableId, teamId)
      .subscribe(comments => this.comments = comments);
  }

  newComment(teamdeliverableId: number, coachId:number) : Comment {
    var comment = new Comment();
    comment.teamdeliverable = teamdeliverableId;
    comment.coach = this.user.id;
    comment.text = null;
    return comment;
  }

  onSubmit() : void {
    this.commentsService.addComment(this.comment, this.teamId)
      .subscribe(comment => {
        if (comment) {
          this.comments.unshift(comment);
          this.comment = this.newComment(comment.teamdeliverable, comment.coach);
        }
      });
  }

  delete(comment: Comment): void {
    this.comments = this.comments.filter(c => c !== comment);
    this.commentsService.deleteComment(comment, this.teamId).subscribe();
  }

}
