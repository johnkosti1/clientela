import {Component, OnInit, ChangeDetectionStrategy, Input, HostBinding} from '@angular/core';

type IconType = 'location' | 'product' | 'skin' | 'video' | 'shop';

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input() icon: IconType;

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
