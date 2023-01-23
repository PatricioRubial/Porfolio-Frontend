import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditComponent } from 'src/app/infrastructure/edit.component';
import { Proyects } from 'src/app/models/proyects';
import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  templateUrl: 'proyects-edit.component.html',
})
export class ProyectsEditComponent extends EditComponent<Proyects> {
  constructor(
    fb: FormBuilder,
    route: ActivatedRoute,
    proyectsService: ProyectsService,
    router: Router
  ) {
    super(fb, route, proyectsService, router);

    this.form = this.fb.group({
        name: [null, Validators.required],
        description: [null, Validators.required],
        photo: [null],
    });
  }
}
