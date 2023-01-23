import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditComponent } from 'src/app/infrastructure/edit.component';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({templateUrl: 'skill-edit.component.html',
})

export class SkillEditComponent extends EditComponent<Skill> {
    
constructor(
    fb: FormBuilder,
    route: ActivatedRoute,
    skillService: SkillService,
    router: Router
) {
    super(fb, route, skillService, router);

    this.form = this.fb.group({
    percentage: [null, Validators.required],
    name: [null, Validators.required],
    color: [null, Validators.required],
    icon: [null ],
    });
}
}
