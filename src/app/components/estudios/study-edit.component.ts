import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudiesService } from 'src/app/services/studies.service';
import { Study } from 'src/app/models/study';
import { EditComponent } from 'src/app/infrastructure/edit.component';

@Component({
  templateUrl: 'study-edit.component.html',
})
export class StudyEditComponent extends EditComponent<Study> {
  constructor(
    fb: FormBuilder,
    route: ActivatedRoute,
    studiesService: StudiesService,
    router: Router
    ) {
      super(fb, route, studiesService, router);
      
      this.form = this.fb.group({
        institution: [null, Validators.required],
        name: [null, Validators.required],
        description: [null, Validators.required],
        link: [null],
        photo: [null],
      });
    }
    @Input() name!: String;
    @Input() institution!: String;
    @Input() description!: String;
    @Input() photo!: String | null;
    @Input() tittle!: String | null;
   
}
