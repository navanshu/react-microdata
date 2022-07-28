import { ReactNode } from "react";
import { AddressRegion } from "../../PostalAddress/itemProps/AddressRegion";
import { PostalAddress } from "../../PostalAddress/types";
declare const AddressProp: PostalAddress<{
    children?: ReactNode | AddressRegion;
}>;
declare type Address = PostalAddress<{
    children?: ReactNode | AddressRegion;
}>;
export type { Address };
export default AddressProp;
//# sourceMappingURL=Address.d.ts.map