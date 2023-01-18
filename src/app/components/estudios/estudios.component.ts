import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { merge, Observable, Subject, switchMap } from 'rxjs';
import { Study } from 'src/app/models/study';
import { StudiesService } from 'src/app/services/studies.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss'],
})
export class EstudiosComponent implements OnInit {
  private reloadSubject$ = new Subject();
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;
  @Input() loggedIn!: boolean | null;
  studies$!: Observable<Study[]>;

  constructor(
    private studiesService: StudiesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const studies$ = this.studiesService.getAll();
    const reload$ = this.reloadSubject$.pipe(switchMap(() => studies$));
    this.studies$ = merge(studies$, reload$);
  }

  delete(id: number) {
    const modal = this.modalService.open(ConfirmDialogComponent);
    const component = modal.componentInstance as ConfirmDialogComponent;
    component.setMessage('Esta seguro que desea borrar de forma permante este registro?');

    modal.result.then(() => {
      this.studiesService
        .delete(id)
        .subscribe(() => this.reloadSubject$.next(true));
    });
  }
}
