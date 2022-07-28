import ThingType from "../Thing/Thing";

class ContactPointType extends ThingType {
  contactType() {
    return this.makeItemPropComponent({
      itemProp: "contactType",
    });
  }
}

export default ContactPointType;
