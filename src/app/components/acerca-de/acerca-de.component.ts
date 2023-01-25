import { Component, Input } from '@angular/core';
import {  faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent  {
  @Input() loggedIn!: boolean | null;
  @Input() name!: String;
  @Input() tittle!: String;
  @Input() description!: String;
  @Input() photo!: String;
  
  faEdit = faEdit;

  
}
