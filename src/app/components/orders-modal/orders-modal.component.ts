import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
  styleUrls: ['./orders-modal.component.less']
})
export class OrdersModalComponent {
  @Output() closeModal = new EventEmitter()
}
