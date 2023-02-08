import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MonetaryAmountType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemDefectReturnShippingFeesAmount',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

const ItemDefectReturnShippingFeesAmount: Type & { MonetaryAmount: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'itemDefectReturnShippingFeesAmount',
   ...props
  },
  children
 );
};

ItemDefectReturnShippingFeesAmount.MonetaryAmount = MonetaryAmountType;

export { ItemDefectReturnShippingFeesAmount };
