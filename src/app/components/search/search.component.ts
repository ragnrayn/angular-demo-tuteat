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
    let places = new google.maps.places.Autocomplete($event.target, { 'componentRestrictions': { country: "UA" }, types: ['address'] });
    let place: any;
    if(places){
      document.querySelector(".pac-container")?.classList.add("pac-active")
      places.addListener("place_changed", () => {
        place = places.getPlace();
      })
    }
  }

  getLocationFromList($event: any){
    this.locationFromList.emit($event)
  }

  States = States;
}
