import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Review: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'review',
   itemScope: true,
   itemType: 'https://schema.org/Review',
   ...props
  },
  children
 );
};

export { Review };
