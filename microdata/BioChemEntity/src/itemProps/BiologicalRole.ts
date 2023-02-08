import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DefinedTermType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'biologicalRole',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

const BiologicalRole: Type & { DefinedTerm: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'biologicalRole',
   ...props
  },
  children
 );
};

BiologicalRole.DefinedTerm = DefinedTermType;

export { BiologicalRole };
