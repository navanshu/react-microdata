import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Owns: Type & {
 Product: Type;
 OwnershipInfo: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'owns',
   ...props
  },
  children
 );
};

Owns.Product = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'owns',
   itemScope: true,
   itemType: 'https://schema.org/Product',
   ...props
  },
  children
 );
};

Owns.OwnershipInfo = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'owns',
   itemScope: true,
   itemType: 'https://schema.org/OwnershipInfo',
   ...props
  },
  children
 );
};

export { Owns };
