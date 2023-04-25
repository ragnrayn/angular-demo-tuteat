import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.less']
})
export class CardModalComponent implements OnInit {

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.getAllCards().subscribe(data => console.log("All cards", data))
  }

  cardData: any = {
    cardNumber: "",
    cardDate: "",
    cardCvv: ""
  }

  addCard(): void {
    console.log("Card data", this.cardData)
    this.authService.addNewCard(this.cardData).subscribe(data => console.log("New card", data))
  }

}
