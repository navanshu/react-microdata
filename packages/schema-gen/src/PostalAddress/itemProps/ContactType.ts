import { postalAddressTypeFactory } from "../PostalAddress.factory";
import { Text } from "../../Text/types";

const ContactTypeProp: Text<{ children: string }> =
  postalAddressTypeFactory.contactType();

type ContactType = Text<{
  children: string;
}>;

export type { ContactType };
export default ContactTypeProp;
