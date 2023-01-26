import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProfileEditComponent } from './components/acerca-de/profile-edit.component';
import { StudyEditComponent } from './components/estudios/study-edit.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsEditComponent } from './components/proyectos/projects-edit.component';
import { SkillEditComponent } from './components/skils/skill-edit.component';


const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'studies',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: StudyEditComponent,
      },
      {
        path: ':id/edit',
        component: StudyEditComponent,
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'skills-profiles',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: SkillEditComponent,
      },
      {
        path: ':id/edit',
        component: SkillEditComponent,
      },
    ],
  },
  {
    path: 'projects',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: ProjectsEditComponent,
      },
      {
        path: ':id/edit',
        component: ProjectsEditComponent,
      },
    ],
  },
  { path: 'profile/edit',  canActivate: [AuthGuard], component: ProfileEditComponent },
  
  { path: '**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
