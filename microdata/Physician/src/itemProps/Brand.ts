import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Brand: Type & {
 Organization: Type;
 Brand: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'brand',
   ...props
  },
  children
 );
};

Brand.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'brand',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

Brand.Brand = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'brand',
   itemScope: true,
   itemType: 'https://schema.org/Brand',
   ...props
  },
  children
 );
};

export { Brand };
