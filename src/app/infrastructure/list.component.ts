import { Injectable, Input, OnInit } from "@angular/core";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject, Observable, merge, switchMap } from "rxjs";
import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";
import { CrudService } from "./crud-service";

@Injectable()
export class ListComponent<TEntity extends { [key: string]: any; }> implements OnInit {
    private reloadSubject$ = new Subject();
    faPlus = faPlus;
    faEdit = faEdit;
    faTrash = faTrash;
    
    items$!: Observable<TEntity[]>;
    
    constructor(
        private service: CrudService<TEntity>,
        private modalService: NgbModal
      ) {}
    
      ngOnInit(): void {
        const items$ = this.service.getAll();
        const reload$ = this.reloadSubject$.pipe(switchMap(() => items$));
        this.items$ = merge(items$, reload$);
      }
    
      delete(id: number) {
        const modal = this.modalService.open(ConfirmDialogComponent);
        const component = modal.componentInstance as ConfirmDialogComponent;
        component.setMessage('Esta seguro que desea borrar de forma permante este registro?');
    
        modal.result.then(() => {
          this.service
            .delete(id)
            .subscribe(() => this.reloadSubject$.next(true));
        });
      }
}
