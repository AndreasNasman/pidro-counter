import {
  MAXIMUM_POINTS,
  MILLISECOND_MAGNITUDE,
  MINIMUM_POINTS,
} from "components/common/constants";
import buttonStyles from "./button/Button.module.css";

const INCLUSIVE_END_OFFSET = 1;
export const NUMBERS = Array.from(
  { length: MAXIMUM_POINTS - MINIMUM_POINTS + INCLUSIVE_END_OFFSET },
  (_value: number, index: number) => index + MINIMUM_POINTS
);

export const TIMEOUT =
  parseFloat(buttonStyles.duration) * MILLISECOND_MAGNITUDE;
