import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReviewType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'reviews',
   itemScope: true,
   itemType: 'https://schema.org/Review',
   ...props
  },
  children
 );
};

const Reviews: Type & { Review: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reviews',
   ...props
  },
  children
 );
};

Reviews.Review = ReviewType;

export { Reviews };
