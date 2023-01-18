import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  templateUrl: 'confirm-dialog.component.html',
  styleUrls: ['confirm-dialog.component.css'],
})
export class ConfirmDialogComponent {
  message: string | undefined;

  constructor(public modal: NgbActiveModal) {}


  setMessage(message: string) {
    this.message = message;
  }
}
