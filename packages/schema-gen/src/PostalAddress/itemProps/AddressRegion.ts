import { postalAddressTypeFactory } from "../PostalAddress.factory";
import { Text } from "../../Text/types";

const AddressRegionProp: Text<{
  children: string;
}> = postalAddressTypeFactory.addressRegion();

type AddressRegion = Text<{
  children: string;
}>;

export type { AddressRegion };
export default AddressRegionProp;
