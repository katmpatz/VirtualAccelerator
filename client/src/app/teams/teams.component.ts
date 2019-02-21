import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Team } from '../team';
import {TeamService} from '../team.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  // fileToUpload: File = null;
  teams : Team[];
  closeResult: string;
  url: string;
  team : Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private modalService: NgbModal,
    private auth: AuthService
  ) { }

   ngOnInit() {
     this.getTeams();
     this.team = this.newTeam();
   }

   getTeams(): void {
     this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
   }


  newTeam() : Team {
    var team = new Team();
    team.name = '';
    team.website = '';
    team.pipeline = '';
    team.maturity_level = null;
    team.tag_line = '';
    team.research_stream = false;
    team.coorporate_existance = false;
    team.date_of_entry = new Date();
    return team;
  }

  onSubmit() : void {
    this.teamService.addTeam(this.team)
      .subscribe(team => {
        if (team) {
          this.teams.unshift(team);
          this.team = this.newTeam();
        }
      });
  }

    delete(team: Team): void {
      this.teams = this.teams.filter(h => h !== team);
      this.teamService.deleteTeam(team).subscribe();
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


 //image pteam
  // public imagePath;
  // imgURL: any;
  // public message: string;
  //
  // pteam(files) {
  //   if (files.length === 0)
  //     return;
  //
  //   var mimeType = files[0].type;
  //   if (mimeType.match(/image\/*/) == null) {
  //     this.message = "Only images are supported.";
  //     return;
  //   }
  //
  //   var reader = new FileReader();
  //   this.imagePath = files;
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => {
  //     this.imgURL = reader.result;
  //   }
  // }

}
