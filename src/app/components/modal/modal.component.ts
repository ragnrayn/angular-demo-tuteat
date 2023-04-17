import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter()

  switchPopupValue: string = "login-by-services";
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

