import { ReactNode } from "react";
import { Address } from "./itemProps/Address";
import { StarRating } from "./itemProps/StarRating";
import { restaurantTypeFactory } from "./RestaurantType.factory";
import { Restaurant } from "./types";
import { Name } from "./itemProps/Name";

const RestaurantType: Restaurant<{
  children?: ReactNode | Address | StarRating | Name;
}> = restaurantTypeFactory.restaurant();

export default RestaurantType;
