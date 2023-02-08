import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const MinimumPaymentDue: Type & {
 MonetaryAmount: Type;
 PriceSpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'minimumPaymentDue',
   ...props
  },
  children
 );
};

MinimumPaymentDue.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'minimumPaymentDue',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

MinimumPaymentDue.PriceSpecification = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'minimumPaymentDue',
   itemScope: true,
   itemType: 'https://schema.org/PriceSpecification',
   ...props
  },
  children
 );
};

export { MinimumPaymentDue };
