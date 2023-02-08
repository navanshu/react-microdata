import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TotalPrice: Type & {
 PriceSpecification: Type;
 Number: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'totalPrice',
   ...props
  },
  children
 );
};

TotalPrice.PriceSpecification = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'totalPrice',
   itemScope: true,
   itemType: 'https://schema.org/PriceSpecification',
   ...props
  },
  children
 );
};

TotalPrice.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'totalPrice',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

export { TotalPrice };
