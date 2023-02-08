import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ParcelDeliveryType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'orderDelivery',
   itemScope: true,
   itemType: 'https://schema.org/ParcelDelivery',
   ...props
  },
  children
 );
};

const OrderDelivery: Type & { ParcelDelivery: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'orderDelivery',
   ...props
  },
  children
 );
};

OrderDelivery.ParcelDelivery = ParcelDeliveryType;

export { OrderDelivery };
