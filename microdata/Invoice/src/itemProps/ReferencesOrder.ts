import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const OrderType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'referencesOrder',
   itemScope: true,
   itemType: 'https://schema.org/Order',
   ...props
  },
  children
 );
};

const ReferencesOrder: Type & { Order: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'referencesOrder',
   ...props
  },
  children
 );
};

ReferencesOrder.Order = OrderType;

export { ReferencesOrder };
