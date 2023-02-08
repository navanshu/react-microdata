import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ItemListOrder: Type & {
 ItemListOrderType: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemListOrder',
   ...props
  },
  children
 );
};

ItemListOrder.ItemListOrderType = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemListOrder',
   itemScope: true,
   itemType: 'https://schema.org/ItemListOrderType',
   ...props
  },
  children
 );
};

export { ItemListOrder };
