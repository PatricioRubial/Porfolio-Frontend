import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { merge, Observable, Subject, switchMap, tap } from 'rxjs';
import { Study } from 'src/app/models/study';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss'],
})
export class EstudiosComponent implements OnInit {
  private reloadSubject$ = new Subject();
  faPlus = faPlus;
  faEdit = faEdit;
  @Input() loggedIn!: boolean | null;
  studies$!: Observable<Study[]>;


  constructor(private studiesService: StudiesService) {}

  ngOnInit(): void {
    const studies$ = this.studiesService.getAll();
    const reload$ = this.reloadSubject$.pipe(switchMap(() => studies$));
    this.studies$ = merge(studies$, reload$);
  }

  delete(id: number) {
    this.studiesService
      .delete(id)
      .pipe(tap(() => this.reloadSubject$.next(true)));
  }
}
