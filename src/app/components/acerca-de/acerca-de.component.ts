import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent {
  @Input() name!: String;
  @Input() tittle!: String;
  @Input() description!: String;

}
