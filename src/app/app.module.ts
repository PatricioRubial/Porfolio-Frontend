import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';

import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkilsComponent } from './components/skils/skils.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudyEditComponent } from './components/estudios/study-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillEditComponent } from './components/skils/skill-edit.component';
import { ProjectsEditComponent as ProjectsEditComponent } from './components/proyectos/projects-edit.component';
import { ProfileEditComponent } from './components/acerca-de/profile-edit.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BannerComponent,
    LogoAPComponent,
    HeaderComponent,
    EstudiosComponent,
    SkilsComponent,
    FooterComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponentComponent,
    StudyEditComponent,
    SkillEditComponent,
    ProjectsEditComponent,
    ProfileEditComponent,
    LoadingComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
