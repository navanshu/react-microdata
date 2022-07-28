import { ReactNode } from "react";
import { AddressRegion } from "../../PostalAddress/itemProps/AddressRegion";
import { PostalAddress } from "../../PostalAddress/types";
import { restaurantTypeFactory } from "../RestaurantType.factory";

const AddressProp: PostalAddress<{
  children?: ReactNode | AddressRegion;
}> = restaurantTypeFactory.address();

type Address = PostalAddress<{
  children?: ReactNode | AddressRegion;
}>;

export type { Address };
export default AddressProp;
