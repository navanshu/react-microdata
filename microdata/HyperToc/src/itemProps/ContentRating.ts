import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ContentRating: Type & {
 Rating: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'contentRating',
   ...props
  },
  children
 );
};

ContentRating.Rating = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'contentRating',
   itemScope: true,
   itemType: 'https://schema.org/Rating',
   ...props
  },
  children
 );
};

export { ContentRating };
