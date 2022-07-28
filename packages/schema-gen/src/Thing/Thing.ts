import ItemFactory from "../ItemFactory";

class ThingTypeFactory extends ItemFactory {
  name() {
    return this.makeItemPropComponent({ itemProp: "name" });
  }

  description() {
    return this.makeItemPropComponent({ itemProp: "description" });
  }
}

export default ThingTypeFactory;
