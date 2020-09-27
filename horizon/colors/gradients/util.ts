import { ReadonlyPrimarySecondaryColor } from "@horizon/colors";

const linearGradient = (color: ReadonlyPrimarySecondaryColor): string =>
  `linear-gradient(276.34deg, ${color["700"]} 0%, ${color["300"]} 100%)`;

export default linearGradient;
