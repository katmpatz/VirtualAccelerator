import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Team } from '../team';
import {TeamService} from '../team.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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


  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private modalService: NgbModal,
  ) { }

   ngOnInit() {
     this.getTeams();
   }

   getTeams(): void {
     this.teamService.getTeams()
      .subscribe(teams => this.teams = teams);
   }

   // handleFileInput(files: FileList) {
   //   this.fileToUpload = files.item(0);
   // }

   add(name: String, pipeline: String, maturity_levelStr: string): void {
      // let id = +idStr;
      name = name.trim();
      pipeline = pipeline.trim();
      let maturity_level = +maturity_levelStr;
      // photo = this.fileToUpload;
      if (!name || !pipeline || !maturity_level) { return; }
      this.teamService.addTeam({name, pipeline, maturity_level} as Team)
        .subscribe(team => {
          // If the operation has failed, TeamService's handleError()
          // will have given an empty result; so we add to the
          // teams array only if a non-empty result has been produced.
          if (team) {
            this.teams.push(team);
          }
        });
    }

    delete(team: Team): void {
      this.teams = this.teams.filter(h => h !== team);
      this.teamService.deleteTeam(team).subscribe();
    }

    open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


 //image preview
  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
