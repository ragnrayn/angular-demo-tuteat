import { Component } from '@angular/core';

@Component({
  selector: 'app-restourant',
  templateUrl: './restourant.component.html',
  styleUrls: ['./restourant.component.less']
})
export class RestourantComponent {

  addRestourant: string = "switchToDefault";

  switchTo(): void {
    if(this.addRestourant === "switchToDefault"){
      this.addRestourant = "switchToAdd"
    }else{
      this.addRestourant = "switchToDefault"
    }
  }

}
