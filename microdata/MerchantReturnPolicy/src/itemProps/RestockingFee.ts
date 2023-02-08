import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RestockingFee: Type & {
 MonetaryAmount: Type;
 Number: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'restockingFee',
   ...props
  },
  children
 );
};

RestockingFee.MonetaryAmount = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'restockingFee',
   itemScope: true,
   itemType: 'https://schema.org/MonetaryAmount',
   ...props
  },
  children
 );
};

RestockingFee.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'restockingFee',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

export { RestockingFee };
