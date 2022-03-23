import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {
  @Output() value: EventEmitter<boolean>;

  khaliEmJ: FormGroup = new FormGroup({});

  constructor() {
    this.value = new EventEmitter<boolean>();
   }

  ngOnInit(): void {}

  close(value: boolean) {
    this.value.emit(value);
  }

}
