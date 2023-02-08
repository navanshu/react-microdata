import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ShippingDeliveryTimeType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'deliveryTime',
   itemScope: true,
   itemType: 'https://schema.org/ShippingDeliveryTime',
   ...props
  },
  children
 );
};

const DeliveryTime: Type & { ShippingDeliveryTime: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'deliveryTime',
   ...props
  },
  children
 );
};

DeliveryTime.ShippingDeliveryTime = ShippingDeliveryTimeType;

export { DeliveryTime };
