import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const NetWorth: Type & {
 MonetaryAmount: Type;
 PriceSpecification: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'netWorth',
   ...props
  },
  children
 );
};

NetWorth.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'netWorth',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

NetWorth.PriceSpecification = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'netWorth',
   itemScope: true,
   itemType: 'https://schema.org/PriceSpecification',
   ...props
  },
  children
 );
};

export { NetWorth };
