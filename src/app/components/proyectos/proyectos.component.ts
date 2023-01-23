import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from 'src/app/infrastructure/list.component';
import { Proyects } from 'src/app/models/proyects';

import { ProyectsService } from 'src/app/services/proyects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent extends ListComponent<Proyects> {
  @Input() loggedIn!: boolean | null;
  
  constructor(proyectsService: ProyectsService, modalService: NgbModal) {
    super(proyectsService, modalService);
  }
}
