import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReviewType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedMediaReview',
   itemScope: true,
   itemType: 'https://schema.org/Review',
   ...props
  },
  children
 );
};

const AssociatedMediaReview: Type & { Review: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'associatedMediaReview',
   ...props
  },
  children
 );
};

AssociatedMediaReview.Review = ReviewType;

export { AssociatedMediaReview };
