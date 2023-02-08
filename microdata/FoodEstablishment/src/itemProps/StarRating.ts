import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RatingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'starRating',
   itemScope: true,
   itemType: 'https://schema.org/Rating',
   ...props
  },
  children
 );
};

const StarRating: Type & { Rating: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'starRating',
   ...props
  },
  children
 );
};

StarRating.Rating = RatingType;

export { StarRating };
