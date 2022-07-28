import { ratingTypeFactory } from "../RatingType.factory";
import { ReactNode } from "react";
import { Text } from "../../Text/types";

type RatingValueProps = {
  children: ReactNode;
  content: string;
};

const RatingValueProp: Text<{
  children: string;
  content: string;
}> = ratingTypeFactory.ratingValue();

type RatingValue = Text<RatingValueProps>;

export type { RatingValue };
export default RatingValueProp;
