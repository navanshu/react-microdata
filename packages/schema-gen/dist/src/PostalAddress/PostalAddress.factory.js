import ContactPoint from "../ContactPoint/ContactPoint";
class PostalAddressTypeFactory extends ContactPoint {
    addressRegion() {
        return this.makeItemPropComponent({ itemProp: "addressRegion" });
    }
    postalAddress() {
        return this.makeItemTypeComponent({ itemType: "PostalAddress" });
    }
    addressLocality() {
        return this.makeItemPropComponent({ itemProp: "addressLocality" });
    }
}
const postalAddressTypeFactory = new PostalAddressTypeFactory();
export { postalAddressTypeFactory };
export default PostalAddressTypeFactory;
//# sourceMappingURL=PostalAddress.factory.js.map