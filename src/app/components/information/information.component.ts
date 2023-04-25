import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router){}

  userData: any;
  passwordState: string = "password";
  passwordStateBool: boolean = true;

  ngOnInit(): void {
    this.authService.getClientProfile().subscribe(data => {console.log("Client profile", data); this.userData = data;});
  }

  deleteAccount(): void {
    this.authService.deleteAccount().subscribe(data => {
      console.log("Delete account", data);
      localStorage.clear();
      this.router.navigate(['/home'])
    });
  }
  
  toggleShowPassword() {
    if (this.passwordStateBool) {
      this.passwordState = "text";
      this.passwordStateBool = false;
    } else
      this.passwordState = "password";
  }

}
