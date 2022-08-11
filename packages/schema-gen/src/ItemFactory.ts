import { forwardRef as reactForwardRef, createElement, Fragment } from "react";

class ItemPropFactory {
  makeDisplayName(name: string) {
    // @ts-ignore
    const [firstLetter, ...rest] = name;
    return `${firstLetter.toUpperCase()}${rest}ItemProp`;
  }

  makeItemPropComponent({
    itemProp,
    itemScope,
  }: {
    itemProp: string;
    itemScope?: string;
  }) {
    //TODO: add types
    function forwardRef(
      { as = "div", children, ...props }: any,
      ref: any
    ): any {
      const { itemProp, itemScope } = Wrapper as any;

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const scopeProps = !!itemScope
        ? {
            itemScope: true,
            itemType: `https://schema.org/${itemScope}`,
          }
        : {};

      if (as === "meta" && children) {
        // Note: You cant pass children to the "meta" tag
        return createElement(
          Fragment,
          null,
          createElement(as, { ref, itemProp, ...props }),
          createElement(Fragment, null, children)
        );
      }
      return createElement(
        as,
        {
          ref,
          itemProp,
          ...scopeProps,
          ...props,
        },
        children
      );
    }

    const Wrapper = reactForwardRef(forwardRef) as any;

    Wrapper.itemScope = itemScope;
    Wrapper.itemProp = itemProp;
    Wrapper.displayName = this.makeDisplayName(itemProp);

    return Wrapper;
  }
}

class ItemFactory extends ItemPropFactory {
  makeItemTypeComponent({ itemType }: { itemType: string }) {
    function forwardRef(
      { as = "div", itemScope = true, children, ...props }: any,
      ref: any
    ) {
      const { itemType } = Wrapper;
      return createElement(
        as,
        {
          ref,
          ...props,
          itemScope,
          itemType: `https://schema.org/${itemType}`,
        },
        children
      );
    }

    const Wrapper = reactForwardRef(forwardRef) as any;

    Wrapper.itemType = itemType;
    Wrapper.displayName = `${itemType}ItemType`;

    return Wrapper;
  }
}

export default ItemFactory;
