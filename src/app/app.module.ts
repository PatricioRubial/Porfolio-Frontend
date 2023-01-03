import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkilsComponent } from './components/skils/skils.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    BannerComponent,
    LogoAPComponent,
    HeaderComponent,
    SocialComponent,
    FotoPerfilComponent,
    EstudiosComponent,
    SkilsComponent,
    FooterComponent,
    ProyectosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
