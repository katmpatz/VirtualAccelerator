import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { TeamDeliverable } from '../teamdeliverable';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';


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
  teamdeliverable: number;


  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    // private teamDeliverableService: TeamdeliverableService,
    private commentsService: CommentsService,
    // private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.date = new Date(this.today);
    const teamId = this.teamId;
    this.teamdeliverable = +this.route.snapshot.paramMap.get('id');
    // this.comment = this.newComment();
    this.getComments(this.teamdeliverable, teamId);
  }

  getComments(teamdeliverableId: number, teamId: number): void {
    this.commentsService.getComments(teamdeliverableId, teamId)
      .subscribe(comments => this.comments = comments);
  }

  // getComment(id: number, team: number, teamdeliverableId: number): void {
  //   this.commentService.getComment()
  //    .subscribe(comment => this.comment = comment);
  // }

}
