import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const BestRating: Type & {
 Number: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bestRating',
   ...props
  },
  children
 );
};

BestRating.Number = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'bestRating',
   itemScope: true,
   itemType: 'https://schema.org/Number',
   ...props
  },
  children
 );
};

export { BestRating };
