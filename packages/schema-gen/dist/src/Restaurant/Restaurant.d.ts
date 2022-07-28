import { ReactNode } from "react";
import { Address } from "./itemProps/Address";
import { StarRating } from "./itemProps/StarRating";
import { Restaurant } from "./types";
import { Name } from "./itemProps/Name";
declare const RestaurantType: Restaurant<{
    children?: ReactNode | Address | StarRating | Name;
}>;
export default RestaurantType;
//# sourceMappingURL=Restaurant.d.ts.map