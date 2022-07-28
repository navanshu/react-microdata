import { PostalAddress } from "./types";
import { AddressRegion } from "./itemProps/AddressRegion";
import { ReactNode } from "react";
import { ContactType } from "./itemProps/ContactType";
declare const PostalAddressType: PostalAddress<{
    children?: ReactNode | AddressRegion | ContactType;
}>;
export default PostalAddressType;
//# sourceMappingURL=PostalAddress.d.ts.map