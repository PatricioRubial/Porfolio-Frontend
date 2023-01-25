import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject,finalize,first,Observable,} from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  templateUrl: 'profile-edit.component.html',
})
export class ProfileEditComponent implements OnInit {
  form!: FormGroup;
  loading$ = new BehaviorSubject({ loading: true });
  profile$!: Observable<Profile>;

  constructor(
    protected fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: [null , Validators.required],
      tittle: [null ,Validators.required],
      description: [null, Validators.required],
      photo: [null,Validators.required ],
      gitHub:[null],
      linkedIn:[null],
    });
  }
  ngOnInit() {
    this.profileService
      .getProfile()
      .pipe(
        first(),
        finalize(() => this.loading$.next({ loading: false }))
      )
      .subscribe((profile) => this.form.patchValue(profile));
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    const profile = this.form.value as Profile;
    this.profileService.updateProfile(profile).subscribe(() =>  this.router.navigate(['home']));
  }
}
