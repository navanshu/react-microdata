import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ReviewType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'associatedClaimReview',
   itemScope: true,
   itemType: 'https://schema.org/Review',
   ...props
  },
  children
 );
};

const AssociatedClaimReview: Type & { Review: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'associatedClaimReview',
   ...props
  },
  children
 );
};

AssociatedClaimReview.Review = ReviewType;

export { AssociatedClaimReview };
