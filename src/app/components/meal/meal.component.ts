import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.less'],
  animations: [
    trigger('rotateAnim', [
      state('initial', style({ transform: 'rotate(0)' })),
      state('rotate', style({ transform: 'rotate(360deg)' })),
      transition('initial <=> rotate', animate('0.3s'))
    ])
  ]
})
export class MealComponent {

  rotated: boolean = false;
  state: string = "initial"

  flipCard() {
    const card = document.querySelector(".card") as HTMLElement;
    const flipBtn = document.querySelector(".card-flip") as HTMLElement;
    const cardOptions = document.querySelector(".card__options") as HTMLElement;
    let iconFlip = document.querySelector(".card-flip");

    flipBtn.addEventListener("click", () => {
      this.rotated = !this.rotated
      this.state = this.rotated ? 'rotate' : 'initial'
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
      this.rotated = !this.rotated
      this.state = this.rotated ? 'rotate' : 'initial'
      card.classList.toggle("flip")
      setTimeout(() => {
        cardOptions.classList.toggle("visible")
      }, 100)
    })
  }

  ngOnInit() {
    this.flipCard();
    this.flipOnCard();
  }
}
