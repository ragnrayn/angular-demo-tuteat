import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {

  isOpen: boolean = false

  constructor(public router: Router) { }
  
  mobileStyling($event: any): void {
    let tabs = document.querySelector(".office-tabs");
    tabs?.classList.toggle("open")
    if(tabs?.classList.contains("open")){
      this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          tabs?.classList.remove('open')
        }
      })
    }
  }

  exitFromAccount(): void {
    localStorage.clear();
    this.router.navigate(["home"]);
  }


}
