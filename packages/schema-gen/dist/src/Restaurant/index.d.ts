/// <reference types="react" />
import Restaurant from "./Restaurant";
import StarRating from "./itemProps/StarRating";
import Address from "./itemProps/Address";
import Name from "./itemProps/Name";
export { Address, Restaurant, StarRating, Name };
declare const _default: {
    Address: import("../PostalAddress/types").PostalAddress<{
        children?: import("react").ReactNode | import("../PostalAddress/itemProps/AddressRegion").AddressRegion;
    }>;
    Restaurant: import("./types").Restaurant<{
        children?: import("react").ReactNode | import("./itemProps/Address").Address | import("./itemProps/StarRating").StarRating | import("./itemProps/Name").Name;
    }>;
    StarRating: import("../Rating").RatingType<{
        children?: import("react").ReactNode | import("../Rating/item-props/RatingValue").RatingValue;
    }>;
    Name: import("../Text/types/Text.type").Text<{
        children: string;
    }>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map