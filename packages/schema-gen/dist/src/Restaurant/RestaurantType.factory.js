import FoodEstablishmentTypeFactory from "../FoodEstablishment/FoodEstablishmentType.factory";
class RestaurantTypeFactory extends FoodEstablishmentTypeFactory {
    restaurant() {
        return this.makeItemTypeComponent({ itemType: "Restaurant" });
    }
}
const restaurantTypeFactory = new RestaurantTypeFactory();
export { restaurantTypeFactory };
export default RestaurantTypeFactory;
//# sourceMappingURL=RestaurantType.factory.js.map