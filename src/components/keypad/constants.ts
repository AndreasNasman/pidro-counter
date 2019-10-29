import { MAXIMUM_POINTS, MINIMUM_POINTS } from "components/common/constants";
import buttonStyles from "./button/Button.module.css";
import { range } from "lodash";

const DELAY = 200;
const MAGNITUDE = 1000;
export const TIMEOUT = parseFloat(buttonStyles.duration) * MAGNITUDE + DELAY;

export const NUMBERS = range(MINIMUM_POINTS, MAXIMUM_POINTS + 1);
