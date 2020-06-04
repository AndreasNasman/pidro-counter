import {
  MAXIMUM_POINTS,
  MILLISECOND_MAGNITUDE,
  MINIMUM_POINTS
} from "components/common/constants";
import buttonStyles from "./button/Button.module.css";

export const TIMEOUT =
  parseFloat(buttonStyles.duration) * MILLISECOND_MAGNITUDE;

const INCLUSIVE_END_OFFSET = 1;
export const NUMBERS = Array.from(
  { length: MAXIMUM_POINTS - MINIMUM_POINTS + INCLUSIVE_END_OFFSET },
  (_value, index) => index + MINIMUM_POINTS
);
