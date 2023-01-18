import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from 'src/app/infrastructure/list.component';
import { Study } from 'src/app/models/study';
import { StudiesService } from 'src/app/services/studies.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss'],
})
export class EstudiosComponent extends ListComponent<Study> {
  @Input() loggedIn!: boolean | null;
  
  constructor(studiesService: StudiesService, modalService: NgbModal) {
    super(studiesService, modalService);
  }
}
