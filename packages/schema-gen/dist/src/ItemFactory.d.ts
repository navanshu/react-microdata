declare class ItemPropFactory {
    makeDisplayName(name: string): string;
    makeItemPropComponent({ itemProp, itemScope, }: {
        itemProp: string;
        itemScope?: string;
    }): any;
}
declare class ItemFactory extends ItemPropFactory {
    makeItemTypeComponent({ itemType }: {
        itemType: string;
    }): any;
}
export default ItemFactory;
//# sourceMappingURL=ItemFactory.d.ts.map