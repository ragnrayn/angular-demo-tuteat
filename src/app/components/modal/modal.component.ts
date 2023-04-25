import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter()
  @Input() signup = '';

  constructor(private authService: AuthService, private router: Router){}

  // Register data

  phoneStart: string = ""
  phoneEnd: string = ""

  registerData: any = {
    name: "",
    email: "",
    phone: "",
    password: ""
  }
  // Register data

  // SignInData

  signInData: any = {
    email: "",
    password: ""
  }

  // SignInData

  switchPopupValue: string = "login-by-phone";
  passwordState: string = "password";
  passwordStateBool: boolean = true;

  ngOnInit(): void {
    if(this.signup) this.switchPopupValue = this.signup
  }

  registerNewUser(): void {
    this.registerData.phone = this.phoneStart + this.phoneEnd;
    this
      .authService
      .registerByForm(this.registerData)
      .subscribe(data => {
        console.log("Register", data)
      })
  }

  signIn(): void {
    this.authService.signInByForm(this.signInData).subscribe(data => {console.log("SignInData", data); localStorage.setItem("token", JSON.stringify(data)); this.router.navigate(["/dashboard/information"])})
  }

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

