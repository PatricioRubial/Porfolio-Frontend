import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.scss']
})
export class LogoAPComponent {
  loggedIn$!: Observable<boolean>;
  
  constructor(private readonly profileService: ProfileService) {
  }

  ngOnInit(): void {
   this.loggedIn$ = this.profileService.loggedIn$;
  }

  logOut() {
    this.profileService.logout();
  }
}
