import {Component, OnInit, ChangeDetectionStrategy, Input, HostBinding} from '@angular/core';
import {IconType} from "../../types/icon";

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() icon: IconType;

  @HostBinding('class.with-sub-text')
  @Input() subText: string;

  @HostBinding('class.active')
  @Input() active: boolean;

  @HostBinding('class.disabled')
  @Input() disabled: boolean;

  @HostBinding('class.icon')
  get withIcon() {
    return !!this.icon;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
