import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from 'src/app/infrastructure/list.component';
import { Projects } from 'src/app/models/projects';

import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent extends ListComponent<Projects> {
  @Input() loggedIn!: boolean | null;
  
  constructor(projectsService: ProjectsService, modalService: NgbModal) {
    super(projectsService, modalService);
  }
}
