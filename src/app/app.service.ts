import {Injectable} from "@angular/core";
import {Button} from "./types/button";
import {StoreLocation} from "./types/store-location";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  services: Button[] = [
    { title: 'Personal Shopping', icon: 'product', disabled: false },
    { title: 'Skin Care Services', icon: 'skin', disabled: false },
    { title: 'Store Locator', icon: 'location', subText: '(Coming Soon)', disabled: true },
  ];

  channels: Button[] = [
    { title: 'In-Store', icon: 'shop'},
    { title: 'Video', icon: 'video'},
  ];

  locations: StoreLocation[] = [
    {
      title: 'Tysons Corner Center, VA',
      address: 'Tysons Corner Center, VA',
      openingHours: [
        'Monday - Saturday: 09:30 - 21:00',
        'Sunday: 11:00 - 18:30'
      ],
      mapPosition: [41.7214407, 44.7803698],
    },
    {
      title: '5th Avenue, New York, NY',
      address: '640 5th Ave, New York, NY 10019, USA',
      openingHours: [
        'Monday - Saturday: 09:30 - 21:00',
        'Sunday: 11:00 - 18:30'
      ],
      mapPosition: [40.7274199, -73.9994346],
    }
  ]
}
