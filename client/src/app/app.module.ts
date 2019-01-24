import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import {DatePipe} from '@angular/common';

import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DeliverableComponent } from './deliverable/deliverable.component';
import { DeliverableDetailsComponent } from './deliverable-details/deliverable-details.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { TeamSearchComponent } from './team-search/team-search.component';
import { TeamMemberService } from './team-member.service';
import { TeamService } from './team.service';
import { DeliverableService } from './deliverable.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamMemberComponent,
    TeamDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SidebarComponent,
    DeliverableComponent,
    DeliverableDetailsComponent,
    EditTeamComponent,
    TeamSearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe, TeamMemberService, TeamService, DeliverableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
