import { Routes } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationEnum } from './enums/NavigationEnum';
import { PlanningComponent } from './planning/planning.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: NavigationEnum.team, pathMatch: 'full' },
  { path: NavigationEnum.team, component: TeamComponent },
  { path: NavigationEnum.dashboard, component: DashboardComponent },
  { path: NavigationEnum.planning, component: PlanningComponent },
  { path: NavigationEnum.profile, component: ProfileComponent },
];