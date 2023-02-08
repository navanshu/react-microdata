import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'returnShippingFeesAmount',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

const ReturnShippingFeesAmount: Type & { MonetaryAmount: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'returnShippingFeesAmount',
   ...props
  },
  children
 );
};

ReturnShippingFeesAmount.MonetaryAmount = MonetaryAmountType;

export { ReturnShippingFeesAmount };
