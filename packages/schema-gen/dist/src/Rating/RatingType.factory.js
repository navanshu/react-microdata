import ThingTypeFactory from "../Thing/Thing";
class RatingTypeFactory extends ThingTypeFactory {
    ratingValue() {
        return this.makeItemPropComponent({ itemProp: "ratingValue" });
    }
}
const ratingTypeFactory = new RatingTypeFactory();
export { ratingTypeFactory };
export default RatingTypeFactory;
//# sourceMappingURL=RatingType.factory.js.map