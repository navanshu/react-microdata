import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ItemLocation: Type & {
 Place: Type;
 PostalAddress: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemLocation',
   ...props
  },
  children
 );
};

ItemLocation.Place = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemLocation',
   itemScope: true,
   itemType: 'https://schema.org/Place',
   ...props
  },
  children
 );
};

ItemLocation.PostalAddress = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'itemLocation',
   itemScope: true,
   itemType: 'https://schema.org/PostalAddress',
   ...props
  },
  children
 );
};

export { ItemLocation };
