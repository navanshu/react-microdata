/// <reference types="react" />
import PostalAddress from "./PostalAddress";
import AddressRegion from "./itemProps/AddressRegion";
import ContactType from "./itemProps/ContactType";
export { AddressRegion, PostalAddress, ContactType };
declare const _default: {
    ContactType: import("../Text/types/Text.type").Text<{
        children: string;
    }>;
    PostalAddress: import("./types").PostalAddress<{
        children?: import("react").ReactNode | import("./itemProps/AddressRegion").AddressRegion | import("./itemProps/ContactType").ContactType;
    }>;
    AddressRegion: import("../Text/types/Text.type").Text<{
        children: string;
    }>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map