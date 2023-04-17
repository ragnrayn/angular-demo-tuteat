import { Component } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less']
})
export class MealComponent {

  flipCard() {
    const card = document.querySelector(".card") as HTMLElement;
    const flipBtn = document.querySelector(".card-flip") as HTMLElement;
    const cardOptions = document.querySelector(".card__options") as HTMLElement;

    flipBtn.addEventListener("click", () => {
      card.classList.toggle("flip");
      setTimeout(() => {
        cardOptions.classList.toggle("visible");
      }, 100);
    });
  }

  flipOnCard(){
    const card = document.querySelector(".card") as HTMLElement;
    const flipBtn = document.querySelector(".card-flip") as HTMLElement;
    const cardOptions = document.querySelector(".card__options") as HTMLElement;

    card.addEventListener("click", (event) => {
      card.classList.add("flip")
      setTimeout(() => {
        cardOptions.classList.add("visible")
      }, 100)
    })
  }

  ngOnInit() {
    this.flipCard();
    this.flipOnCard();
  }
}
