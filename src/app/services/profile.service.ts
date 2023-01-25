import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Profile } from '../models/profile';
import { environment } from '../../environments/environment';

const PROFILE_KEY = 'profile';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  readonly loggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
    const loggedInValue = localStorage.getItem(PROFILE_KEY);
    const loggedIn = loggedInValue ? JSON.parse(loggedInValue) : false;

    this.loggedIn$.next(loggedIn);
  }

  getProfile(): Observable<Profile> {
    return this.httpClient.get<Profile>(`${environment.apiUrl}/profiles`);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.httpClient
      .post<Profile>(`${environment.apiUrl}/profiles/login`, {
        email,
        password,
      })
      .pipe(
        catchError((x, y) => {
          if (x?.status === 401) {
            return of(false);
          }

          return y;
        }),
        map((x) => !!x),
        tap(this.saveState) 
      );
  }

  logout() {
    this.saveState(false);
  }

  updateProfile(profile: Profile): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/profiles`, profile)
  }

  private saveState = (state: boolean): void => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(state));
    this.loggedIn$.next(state);
  };
}
