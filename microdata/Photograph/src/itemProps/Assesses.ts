import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const Assesses: Type & {
 DefinedTerm: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'assesses',
   ...props
  },
  children
 );
};

Assesses.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'assesses',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

export { Assesses };
