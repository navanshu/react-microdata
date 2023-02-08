import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const VariesBy: Type & {
 DefinedTerm: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'variesBy',
   ...props
  },
  children
 );
};

VariesBy.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'variesBy',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

export { VariesBy };
