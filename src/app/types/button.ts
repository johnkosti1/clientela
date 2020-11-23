import {IconType} from "./icon";

export interface Button {
  title: string;
  subText?: string;
  disabled?: boolean;
  icon?: IconType;
}
