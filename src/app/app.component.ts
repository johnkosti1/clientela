import {Component} from '@angular/core';
import {Button} from "./types/button";
import {StoreLocation} from "./types/store-location";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedService: Button;
  selectedChannel: Button;
  selectedLocation: StoreLocation;

  onServiceChange(service) {
    this.selectedService = service
  }

  onChannelChange(channel) {
    this.selectedChannel = channel;
  }

  onLocationChange(location) {
    this.selectedLocation = location;
  }

  get locationWontNeed() {
    return this.selectedChannel?.title === 'Video'
  }

  get hasSubmitButton() {
    return this.locationWontNeed
      ? this.selectedService
      : this.selectedLocation && this.selectedService;
  }

  onSubmit() {
    alert(`
    Congratulations,you've successfully
    submitted ${this.selectedChannel.title} ${this.selectedService.title} request.`
      + (this.locationWontNeed ? '' : ` Address: ${this.selectedLocation.address}`))
  }
}
