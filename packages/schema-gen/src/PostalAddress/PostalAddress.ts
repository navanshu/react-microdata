import { postalAddressTypeFactory } from "./PostalAddress.factory";
import { PostalAddress } from "./types";
import { AddressRegion } from "./itemProps/AddressRegion";
import { ReactNode } from "react";
import { ContactType } from "./itemProps/ContactType";

const PostalAddressType: PostalAddress<{
  children?: ReactNode | AddressRegion | ContactType;
}> = postalAddressTypeFactory.postalAddress();

export default PostalAddressType;
