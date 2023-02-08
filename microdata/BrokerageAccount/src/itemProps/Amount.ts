import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Amount: Type & {
 Number: Type;
 MonetaryAmount: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'amount',
   ...props
  },
  children
 );
};

Amount.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'amount',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

Amount.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'amount',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

export { Amount };
