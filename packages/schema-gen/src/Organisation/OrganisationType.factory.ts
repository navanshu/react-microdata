import ThingTypeFactory from "../Thing/Thing";

class OrganisationTypeFactory extends ThingTypeFactory {
  address() {
    return this.makeItemPropComponent({
      itemProp: "address",
      itemScope: "PostalAddress",
    });
  }
}

export default OrganisationTypeFactory;
