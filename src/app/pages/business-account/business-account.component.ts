import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-business-account',
  templateUrl: './business-account.component.html',
  styleUrls: ['./business-account.component.less']
})
export class BusinessAccountComponent {

  constructor(private router: Router){}

  toggleMenu($eveny: any): void {
    let menu = document.querySelector(".business-menu");
    menu?.classList.toggle("open");

    if(menu?.classList.contains("open")){
      this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          menu?.classList.remove("open")
        }
      })
    }

  }

}
