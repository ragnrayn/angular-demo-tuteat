import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter()

  switchPopupValue: string = "login-by-phone";
  passwordState: string = "password";
  passwordStateBool: boolean = true;

  changeLogin(screen: string) {
    this.switchPopupValue = screen
  }

  toggleShowPassword() {
    if (this.passwordStateBool) {
      this.passwordState = "text";
      this.passwordStateBool = false;
    } else
      this.passwordState = "password";
  }
}

