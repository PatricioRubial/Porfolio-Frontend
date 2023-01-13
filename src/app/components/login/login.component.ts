import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login!: FormGroup;
  invalidCredentials = false;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private profileService: ProfileService
  ) {
    this.login = fb.group({
      email: [null, [Validators.required, Validators.email], []],
      pass: [null, Validators.required],
    });
  }

  saveData() {
    if (this.login.valid === false) {
      console.error('Not valid');
      return;
    }

    const { email, pass } = this.login.value;

    this.profileService
      .login(email, pass)
      .pipe(first())
      .subscribe((x) => {
        if (x) {
          this.router.navigate(['home']);
        }

        this.invalidCredentials = true;
      });
  }
}
