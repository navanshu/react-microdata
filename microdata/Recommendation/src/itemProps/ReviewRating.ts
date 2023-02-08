import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const RatingType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'reviewRating',
   itemScope: true,
   itemType: 'https://schema.org/Rating',
   ...props
  },
  children
 );
};

const ReviewRating: Type & { Rating: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'reviewRating',
   ...props
  },
  children
 );
};

ReviewRating.Rating = RatingType;

export { ReviewRating };
