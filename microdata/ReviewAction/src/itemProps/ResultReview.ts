import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReviewType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'resultReview',
   itemScope: true,
   itemType: 'https://schema.org/Review',
   ...props
  },
  children
 );
};

const ResultReview: Type & { Review: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'resultReview',
   ...props
  },
  children
 );
};

ResultReview.Review = ReviewType;

export { ResultReview };
