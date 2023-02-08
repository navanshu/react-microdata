import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'customerRemorseReturnShippingFeesAmount',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

const CustomerRemorseReturnShippingFeesAmount: Type & {
 MonetaryAmount: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'customerRemorseReturnShippingFeesAmount',
   ...props
  },
  children
 );
};

CustomerRemorseReturnShippingFeesAmount.MonetaryAmount = MonetaryAmountType;

export { CustomerRemorseReturnShippingFeesAmount };
