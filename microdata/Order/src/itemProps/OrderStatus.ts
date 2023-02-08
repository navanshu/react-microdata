import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrderStatus: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderStatus',
   itemScope: true,
   itemType: 'https://schema.org/OrderStatus',
   ...props
  },
  children
 );
};

export { OrderStatus };
