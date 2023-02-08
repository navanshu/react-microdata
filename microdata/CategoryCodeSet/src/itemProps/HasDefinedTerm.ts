import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DefinedTermType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'hasDefinedTerm',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

const HasDefinedTerm: Type & { DefinedTerm: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'hasDefinedTerm',
   ...props
  },
  children
 );
};

HasDefinedTerm.DefinedTerm = DefinedTermType;

export { HasDefinedTerm };
