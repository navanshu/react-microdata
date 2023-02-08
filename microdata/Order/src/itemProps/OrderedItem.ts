import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrderedItem: Type & {
 Service: Type;
 OrderItem: Type;
 Product: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderedItem',
   ...props
  },
  children
 );
};

OrderedItem.Service = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderedItem',
   itemScope: true,
   itemType: 'https://schema.org/Service',
   ...props
  },
  children
 );
};

OrderedItem.OrderItem = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderedItem',
   itemScope: true,
   itemType: 'https://schema.org/OrderItem',
   ...props
  },
  children
 );
};

OrderedItem.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderedItem',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

export { OrderedItem };
