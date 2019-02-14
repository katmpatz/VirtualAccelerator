import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { TeamsComponent } from './teams/teams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliverableComponent } from './deliverable/deliverable.component';
import { DeliverableDetailsComponent } from './deliverable-details/deliverable-details.component';
import { TeamdeliverableComponent } from './teamdeliverable/teamdeliverable.component';
import { TeamdeliverableDetailComponent } from './teamdeliverable-detail/teamdeliverable-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'teams', component: TeamsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'teams/:id', component: TeamDetailComponent },
  {path: 'teams/:id/teammembers', component: TeamMemberComponent },
  {path: 'teams/:id/teamdeliverables', component: TeamdeliverableComponent },
  {path: 'teams/:id/teamdeliverables/:id', component: TeamdeliverableDetailComponent },
  {path: 'deliverables', component: DeliverableComponent },
  {path: 'deliverables/:id', component: DeliverableDetailsComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
