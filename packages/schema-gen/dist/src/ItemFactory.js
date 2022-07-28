var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { forwardRef as reactForwardRef, createElement, Fragment } from "react";
class ItemPropFactory {
    makeDisplayName(name) {
        // @ts-ignore
        const [firstLetter, ...rest] = name;
        return `${firstLetter.toUpperCase()}${rest.join("")}ItemProp`;
    }
    makeItemPropComponent({ itemProp, itemScope, }) {
        //TODO: add types
        function forwardRef(_a, ref) {
            var { as = "div", children } = _a, props = __rest(_a, ["as", "children"]);
            const { itemProp, itemScope } = Wrapper;
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scopeProps = !!itemScope
                ? {
                    itemScope: true,
                    itemType: `https://schema.org/${itemScope}`,
                }
                : {};
            if (as === "meta" && children) {
                // Note: You cant pass children to the "meta" tag
                return createElement(Fragment, null, createElement(as, Object.assign({ ref, itemProp }, props)), createElement(Fragment, null, children));
            }
            return createElement(as, Object.assign(Object.assign({ ref,
                itemProp }, scopeProps), props), children);
        }
        const Wrapper = reactForwardRef(forwardRef);
        Wrapper.itemScope = itemScope;
        Wrapper.itemProp = itemProp;
        Wrapper.displayName = this.makeDisplayName(itemProp);
        return Wrapper;
    }
}
class ItemFactory extends ItemPropFactory {
    makeItemTypeComponent({ itemType }) {
        function forwardRef(_a, ref) {
            var { as = "div", itemScope = true, children } = _a, props = __rest(_a, ["as", "itemScope", "children"]);
            const { itemType } = Wrapper;
            return createElement(as, Object.assign(Object.assign({ ref }, props), { itemScope, itemType: `https://schema.org/${itemType}` }), children);
        }
        const Wrapper = reactForwardRef(forwardRef);
        Wrapper.itemType = itemType;
        Wrapper.displayName = `${itemType}ItemType`;
        return Wrapper;
    }
}
export default ItemFactory;
//# sourceMappingURL=ItemFactory.js.map