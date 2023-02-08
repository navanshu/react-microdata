import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const FreeShippingThreshold: Type & {
 MonetaryAmount: Type;
 DeliveryChargeSpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'freeShippingThreshold',
   ...props
  },
  children
 );
};

FreeShippingThreshold.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'freeShippingThreshold',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

FreeShippingThreshold.DeliveryChargeSpecification = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'freeShippingThreshold',
   itemScope: true,
   itemType: 'https://schema.org/DeliveryChargeSpecification',
   ...props
  },
  children
 );
};

export { FreeShippingThreshold };
