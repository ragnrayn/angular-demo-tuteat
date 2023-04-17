import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  currentAddress: any = "";

  async getCoords(coords: any) {
    let geocoder = new google.maps.Geocoder;
    let latlng = new google.maps.LatLng(coords.lat, coords.long)
    const res = await geocoder.geocode({ 'location': latlng })
    this.currentAddress = res.results[1].address_components[1].long_name;
  }

  getNameLocation(location: any) {
    console.log("asdas", location.target.value)
  }

  locationFromList($event: any) {
    this.currentAddress = $event.target.textContent
  }

  States = States;
  state: States = States.Description;
  isModalOpened: boolean = false;
  localMeals: [] | null = null;

}

export enum States {
  LocalMeals = 'localMeals',
  Meal = 'meal',
  Description = 'description'
}


