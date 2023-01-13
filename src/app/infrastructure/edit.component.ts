import { Injectable, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, filter, first, map, merge, Observable, shareReplay, switchMap, tap } from "rxjs";
import { CrudService } from "./crud-service";

@Injectable()
export class EditComponent<TEntity extends { [key: string]: any; }> implements OnInit {
    id$!: Observable<number | null | ''>;
    loading$ = new BehaviorSubject({ loading: true });
    form!: FormGroup;
    isNew!: boolean;
  
    constructor(
      protected fb: FormBuilder,
      private route: ActivatedRoute,
      private crudService: CrudService<TEntity>,      
      private router: Router
    ) {
    }
  
    ngOnInit() {
      this.id$ = this.route.paramMap.pipe(
        map((params) => {
          const idParam = params.get('id');
          return idParam && Number(idParam);
        }),
        first(),
        shareReplay(1)
      );
  
      const edit$ = this.id$.pipe(
        filter((x) => !!x),
        switchMap((id) => this.crudService.get(Number(id))),
        tap((x) => this.patch(x))
      );
  
      const new$ = this.id$.pipe(filter((x) => !x));
  
      merge(edit$, new$)
        .pipe(
          tap(() => this.loading$.next({ loading: false })),
          first()
        )
        .subscribe(() => {});
    }
  
    protected patch(data: TEntity) {
      this.form.patchValue(data);
    }
  
    save() {
      if (this.form.invalid) {
        return;
      }
  
      this.loading$.next({ loading: true });
      var data = this.form.value as TEntity;
  
      const edit$ = this.id$.pipe(
        filter((x) => !!x),
        switchMap((id) => this.crudService.update(Number(id), data))
      );
  
      const new$ = this.id$.pipe(
        filter((x) => !x),
        switchMap(() => this.crudService.create(data))
      );
  
      merge(edit$, new$).pipe(first()).subscribe(() => this.router.navigate(['home']));
    }
  }