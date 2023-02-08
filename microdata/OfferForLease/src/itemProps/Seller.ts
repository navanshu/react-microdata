import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Seller: Type & {
 Organization: Type;
 Person: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seller',
   ...props
  },
  children
 );
};

Seller.Organization = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seller',
   itemScope: true,
   itemType: 'https://schema.org/Organization',
   ...props
  },
  children
 );
};

Seller.Person = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'seller',
   itemScope: true,
   itemType: 'https://schema.org/Person',
   ...props
  },
  children
 );
};

export { Seller };
