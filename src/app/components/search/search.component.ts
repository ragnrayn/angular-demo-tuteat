import { Component, EventEmitter, Input, Output } from '@angular/core';
import { States } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  @Output() getLocation = new EventEmitter();
  @Output() getMeal = new EventEmitter();
  @Output() getLocationName = new EventEmitter();
  @Output() locationFromList = new EventEmitter();

  userPosition: Object = {}
  possibleStreets: any = [];

  getCurrentCoords() {
    navigator.geolocation.getCurrentPosition(res => {
      this.userPosition = { lat: res.coords.latitude, long: res.coords.longitude }
      this.getLocation.emit(this.userPosition)
    })
  }

  toggleLoader(){
    let loader = document.querySelector(".loader")
    let searchFormIcon = document.querySelector(".search-form__icon")

    if(searchFormIcon){
      setTimeout(() => {
        loader?.classList.add("loader-active")
      }, 0)
      setTimeout(() => {
        loader?.classList.remove("loader-active");
      }, 3000)
    }
  }

  getNameOfLocation($event: any) {
    let geocoder = new google.maps.Geocoder();
    console.log($event.target.value)
    geocoder.geocode({ 'address': $event.target.value})
      .then(result => this.possibleStreets = result)
      .catch(err => this.possibleStreets = "")
  }

  getLocationFromList($event: any){
    this.locationFromList.emit($event)
  }

  States = States;
}
