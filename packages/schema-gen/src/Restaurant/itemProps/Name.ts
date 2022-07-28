import { restaurantTypeFactory } from "../RestaurantType.factory";
import { Text } from "../../Text/types";

type Name = Text<{
  children: string;
}>;

const NameProp: Text<{
  children: string;
}> = restaurantTypeFactory.name();

export type { Name };
export default NameProp;
