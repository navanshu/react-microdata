import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const ProgramType: Type & {
 DefinedTerm: Type;
} = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programType',
   ...props
  },
  children
 );
};

ProgramType.DefinedTerm = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'programType',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

export { ProgramType };
