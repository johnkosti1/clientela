import {Component, OnInit, ChangeDetectionStrategy, HostBinding, Input, Output, EventEmitter} from '@angular/core';
import {mapStyles} from "./map-styles";
import {StoreLocation} from "../../types/store-location";


@Component({
  selector: 'app-radio-location',
  templateUrl: './radio-location.component.html',
  styleUrls: ['./radio-location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioLocationComponent implements OnInit {

  @Input() title: StoreLocation["title"];
  @Input() address: StoreLocation['address'];
  @Input() openingHours: StoreLocation['openingHours'];
  @Input() mapPosition: StoreLocation['mapPosition'];

  @Input() set location(location: StoreLocation) {
    this.initializeLocation(location)
  }

  @HostBinding('class.checked')
  @Input() checked: boolean;

  @Output() check: EventEmitter<any> = new EventEmitter<any>();

  mapStyles = mapStyles;

  ngOnInit(): void {
  }

  initializeLocation(location: StoreLocation) {
    if (location) {
      this.title = location.title;
      this.address = location.address;
      this.openingHours = location.openingHours;
      this.mapPosition = location.mapPosition;
    }
  }

  onCheck() {
    this.check.emit()
  }
}
