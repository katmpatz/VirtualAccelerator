import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamMemberComponent } from './team-member/team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
