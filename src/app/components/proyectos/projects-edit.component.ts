import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditComponent } from 'src/app/infrastructure/edit.component';
import { Projects } from 'src/app/models/projects';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  templateUrl: 'projects-edit.component.html',
})
export class ProjectsEditComponent extends EditComponent<Projects> {
  constructor(
    fb: FormBuilder,
    route: ActivatedRoute,
    projectsService: ProjectsService,
    router: Router
  ) {
    super(fb, route, projectsService, router);

    this.form = this.fb.group({
        name: [null, Validators.required],
        description: [null, Validators.required],
        photo: [null],
    });
  }
}
