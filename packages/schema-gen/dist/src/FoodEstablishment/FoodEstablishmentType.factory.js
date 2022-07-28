import OrganisationTypeFactory from "../Organisation/OrganisationType.factory";
class FoodEstablishmentTypeFactory extends OrganisationTypeFactory {
    startRating() {
        return this.makeItemPropComponent({
            itemProp: "starRating",
            itemScope: "Rating",
        });
    }
    foodEstablishment() {
        return this.makeItemTypeComponent({ itemType: "FoodEstablishment" });
    }
}
const foodEstablishmentTypeFactory = new FoodEstablishmentTypeFactory();
export { foodEstablishmentTypeFactory };
export default FoodEstablishmentTypeFactory;
//# sourceMappingURL=FoodEstablishmentType.factory.js.map