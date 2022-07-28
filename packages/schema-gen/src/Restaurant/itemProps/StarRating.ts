import { ReactNode } from "react";
import { restaurantTypeFactory } from "../RestaurantType.factory";
import { RatingType as Rating } from "../../Rating";
import { RatingValue } from "../../Rating/item-props/RatingValue";

interface StartRatingProps {
  children?: ReactNode | RatingValue;
}

const StarRatingProp: Rating<{
  children?: ReactNode | RatingValue;
}> = restaurantTypeFactory.startRating();

type StarRating = Rating<StartRatingProps>;

export type { StarRating };
export default StarRatingProp;
