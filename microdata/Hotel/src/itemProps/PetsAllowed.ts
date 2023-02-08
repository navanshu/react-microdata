import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const PetsAllowed: Type & {
 Boolean: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'petsAllowed',
   ...props
  },
  children
 );
};

PetsAllowed.Boolean = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'petsAllowed',
   itemScope: true,
   itemType: 'https://schema.org/Boolean',
   ...props
  },
  children
 );
};

export { PetsAllowed };
