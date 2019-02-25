import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe, CommonModule } from '@angular/common';
import { TeamdeliverableService }  from '../teamdeliverable.service';

import { TeamDeliverable } from '../teamdeliverable';


@Component({
  selector: 'app-teamdeliverable-detail',
  templateUrl: './teamdeliverable-detail.component.html',
  styleUrls: ['./teamdeliverable-detail.component.css']
})
export class TeamdeliverableDetailComponent implements OnInit {
    today: number = Date.now();
    date: Date;
    teamdeliverable: TeamDeliverable;
    files: any[];
    file: any;
    user = JSON.parse(localStorage.getItem('user'));
    profile = this.user.profile;
    is_coach: boolean;
    is_team_member: boolean;
    message: string;

  constructor(
    private route: ActivatedRoute,
    private teamdeliverableService: TeamdeliverableService,
    private location: Location,
    private datePipe: DatePipe,
    // private uploadFileService: UploadFileService,
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.profile = this.user.profile;
    this.is_team_member = this.user.profile.is_team_member;
    this.is_coach = this.user.profile.is_coach;
    this.date = new Date(this.today);
    this.getTeamdeliverable();
  }

  getTeamdeliverable(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const team_id = +this.route.parent.snapshot.paramMap.get('id');
    this.teamdeliverableService.getTeamdeliverable(id, team_id)
      .subscribe(teamdeliverable => this.teamdeliverable = teamdeliverable);
  }

  goBack(): void {
    this.location.back();
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  deadline_status(deadline: Date): boolean {
    if(!deadline) {
      return true;
    }
    if (this.datePipe.transform(deadline, 'yyyy-MM-dd') > this.datePipe.transform(this.date, 'yyyy-MM-dd')) {
      return true;
    } else {
      return false;
    }
  }


  handleInputChange(e) {
    this.files = e.target.files;
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    let reader = e.target;
    this.file = reader.result;
    console.log(this.file)
  }

    save(): void {
      let validFile = true;
      let delivId = this.teamdeliverable.deliverable.id;
      this.teamdeliverable.deliverable = delivId;
      this.teamdeliverable.file = this.file
      this.teamdeliverable.status = true;
      // this.teamdeliverable.delivery_day = new Date(this.today);
      this.teamdeliverableService.updateTeamDeliverable(this.teamdeliverable)
        .subscribe( teamdel => {
          if (teamdel) {
            this.teamdeliverable = teamdel;
            this.message = "Submited!";
          } else {
            validFile = false;
            this.message = "You have to submit a PDF file.";
          }
        });
      if (!validFile) {
        this.teamdeliverable.file = null
        this.teamdeliverable.status = false;
        // this.teamdeliverable.delivery_day = null;
      }
      this.clear();
    }

    clear() {
      this.files = [];
      this.ngOnInit();
    }




}
