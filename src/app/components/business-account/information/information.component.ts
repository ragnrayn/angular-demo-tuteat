import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent {
  passwordState: string = "password";
  passwordStateBool: boolean = true;
  
  toggleShowPassword() {
    if (this.passwordStateBool) {
      this.passwordState = "text";
      this.passwordStateBool = false;
    } else
      this.passwordState = "password";
  }

}
