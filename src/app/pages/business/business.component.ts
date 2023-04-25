import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.less']
})
export class BusinessComponent {

  @Input() addressData: any;
  isModalOpened: boolean = false;
  signupEmail: string = "";

  changeToEmail(){this.signupEmail = 'signup-by-email'}

}
