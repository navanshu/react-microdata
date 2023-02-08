import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const AggregateRating: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'aggregateRating',
   itemScope: true,
   itemType: 'https://schema.org/AggregateRating',
   ...props
  },
  children
 );
};

export { AggregateRating };
