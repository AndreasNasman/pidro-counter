import { MAXIMUM_POINTS, MINIMUM_POINTS } from "game/constants";
import buttonStyles from "./button/Button.module.css";

const INCLUSIVE_END_OFFSET = 1;
export const POINTS = Array.from(
  { length: MAXIMUM_POINTS - MINIMUM_POINTS + INCLUSIVE_END_OFFSET },
  (_value: number, index: number) => index + MINIMUM_POINTS
);

const MILLISECOND_MAGNITUDE = 1000;
export const TIMEOUT =
  parseFloat(buttonStyles.duration) * MILLISECOND_MAGNITUDE;
