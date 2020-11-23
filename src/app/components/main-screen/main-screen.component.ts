import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {AppService} from "../../app.service";
import {Button} from "../../types/button";

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainScreenComponent implements OnInit {

  @Input() selectedService: Button;
  @Input() selectedChannel: Button;

  @Output() serviceChange: EventEmitter<Button> = new EventEmitter<Button>();
  @Output() channelChange: EventEmitter<Button> = new EventEmitter<Button>();

  services: Button[] = [];

  channels: Button[] = [];


  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.services = this.appService.services;
    this.channels = this.appService.channels;
  }

  isActive(button): boolean {
    return this.selectedService === button;
  }

  isSubActive(button): boolean {
    return this.selectedChannel === button;
  }

  onClick(button) {
    if (this.selectedService !== button)
      this.serviceChange.emit(button)

    if (this.selectedChannel)
      this.channelChange.emit(null)
  }

  onSubClick(button) {
    if (this.selectedChannel !== button)
      this.channelChange.emit(button)
  }
}
