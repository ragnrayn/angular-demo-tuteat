import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.less']
})
export class PaymentsComponent implements OnInit {

  isShowCards: boolean = true;
  allCards: any = [];

  constructor(private authService: AuthService, private router: Router){}


  ngOnInit(): void {
    this.authService.getAllCards().subscribe(data => 
      {
      this.allCards = data;
      console.log(this.allCards)
    })
      this.router.events.subscribe( (e) => {
        if (e instanceof NavigationStart) {
          if (e.url === "/dashboard/payments") {
              this.isShowCards = true;
          } else {
              this.isShowCards = false;
          }
        }
      })
  }


  routeToAddCard(): void { 
    this.router.navigate(["dashboard/payments/add-card"]);
    this.isShowCards = false;
    console.log(this.router.url)
  }

}
