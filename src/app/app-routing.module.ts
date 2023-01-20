import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyEditComponent } from './components/estudios/study-edit.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { SkillEditComponent } from './components/skils/skill-edit.component';


const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'studies',
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
  { path: '**', redirectTo: 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
