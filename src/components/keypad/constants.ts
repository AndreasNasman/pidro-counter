import {
  MAXIMUM_POINTS,
  MILLISECOND_MAGNITUDE,
  MINIMUM_POINTS
} from "components/common/constants";
import buttonStyles from "./button/Button.module.css";
import { range } from "lodash";

const DELAY = 200;
export const TIMEOUT =
  parseFloat(buttonStyles.duration) * MILLISECOND_MAGNITUDE + DELAY;

const INCLUSIVE_END_OFFSET = 1;
export const NUMBERS = range(
  MINIMUM_POINTS,
  MAXIMUM_POINTS + INCLUSIVE_END_OFFSET
);
