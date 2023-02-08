import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrderType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'partOfOrder',
   itemScope: true,
   itemType: 'https://schema.org/Order',
   ...props
  },
  children
 );
};

const PartOfOrder: Type & { Order: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'partOfOrder',
   ...props
  },
  children
 );
};

PartOfOrder.Order = OrderType;

export { PartOfOrder };
