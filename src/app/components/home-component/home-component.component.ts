import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit{
  loggedIn$!: Observable<boolean>;
  profile$!: Observable<Profile>;

  constructor(private readonly profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.loggedIn$ = this.profileService.loggedIn$;
    this.profile$ = this.profileService.getProfile();
  }

}
