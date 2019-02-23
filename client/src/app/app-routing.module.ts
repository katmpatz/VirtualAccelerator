import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliverableComponent } from './deliverable/deliverable.component';
import { DeliverableDetailsComponent } from './deliverable-details/deliverable-details.component';
import { DeliverablesTeamComponent } from './deliverables-team/deliverables-team.component';
import { TeamdeliverableComponent } from './teamdeliverable/teamdeliverable.component';
import { TeamdeliverableDetailComponent } from './teamdeliverable-detail/teamdeliverable-detail.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserComponent},
  {path: 'users/:username', component: UserComponent },
  {path: 'teams', component: TeamsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'teams/:id', component: TeamDetailComponent },
  {path: 'teams/:id/teammembers', component: TeamMemberComponent },
  {path: 'teams/:id/teammembers/:id', component: TeamMemberComponent },
  {path: 'teams/:id/teamdeliverables', component: TeamdeliverableComponent },
  {path: 'teams/:id/teamdeliverables/:id', component: TeamdeliverableDetailComponent },
  {path: 'teamdeliverables', component: DeliverablesTeamComponent },
  {path: 'teamdeliverables/:id', component: TeamdeliverableDetailComponent },
  {path: 'deliverables', component: DeliverableComponent },
  {path: 'deliverables/:id', component: DeliverableDetailsComponent },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
