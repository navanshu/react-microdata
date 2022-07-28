import { ReactNode } from "react";
import { RatingType as Rating } from "../../Rating";
import { RatingValue } from "../../Rating/item-props/RatingValue";
interface StartRatingProps {
    children?: ReactNode | RatingValue;
}
declare const StarRatingProp: Rating<{
    children?: ReactNode | RatingValue;
}>;
declare type StarRating = Rating<StartRatingProps>;
export type { StarRating };
export default StarRatingProp;
//# sourceMappingURL=StarRating.d.ts.map