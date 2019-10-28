import buttonStyles from "./button/Button.module.css";

const DELAY = 200;
const MAGNITUDE = 1000;
export const TIMEOUT = parseFloat(buttonStyles.duration) * MAGNITUDE + DELAY;
