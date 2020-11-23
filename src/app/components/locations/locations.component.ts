import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AppService} from "../../app.service";
import {StoreLocation} from "../../types/store-location";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationsComponent implements OnInit {

  @Input() selectedLocation: StoreLocation;
  @Output() locationChange: EventEmitter<StoreLocation> = new EventEmitter<StoreLocation>();

  locations: StoreLocation[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.locations = this.appService.locations;
  }

  onCheck(location: StoreLocation) {
    if (this.selectedLocation !== location) {
      this.locationChange.emit(location)
    }
  }

  isChecked(location) {
    return this.selectedLocation === location;
  }
}
