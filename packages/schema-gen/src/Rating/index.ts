import { ForwardRefExoticComponent } from "react";
import RatingValue from "./item-props/RatingValue";

interface RatingType<P> extends ForwardRefExoticComponent<P> {}

export type { RatingType };

export { RatingValue };

export default {
  RatingValue,
};
