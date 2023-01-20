import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from 'src/app/infrastructure/list.component';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';


@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent extends ListComponent<Skill> {
  
  @Input() loggedIn!: boolean | null;
  
  constructor(skillService: SkillService, modalService: NgbModal) {
    super(skillService, modalService);
  }
}
