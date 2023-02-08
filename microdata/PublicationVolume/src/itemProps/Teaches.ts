import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Teaches: Type & {
 DefinedTerm: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'teaches',
   ...props
  },
  children
 );
};

Teaches.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'teaches',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

export { Teaches };
