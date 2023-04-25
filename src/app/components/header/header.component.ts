import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  imports: [CommonModule, ModalComponent]
})
export class HeaderComponent implements OnInit {
  @Input() addressData: any;
  @Input() businessAccount: boolean = false;
  @Output() menuStyling = new EventEmitter();

  isOpenMenu: boolean = false;
  isModalOpened: boolean = false;
  userName: string = "";

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.authService.getClientProfile().subscribe(data => {console.log("Header user", data); this.userName = data.name})
  }

  mobileStyling(value: boolean): void {
    let token = localStorage.getItem('token');
    this.menuStyling.emit(value);
    if(token){
      return;
    }
    this.isModalOpened = true;
  }

  routeToDashboard(): void {
    if(this.userName){
      this.isModalOpened = false;
      this.router.navigate(["dashboard/information"]);
    }
  }

}
