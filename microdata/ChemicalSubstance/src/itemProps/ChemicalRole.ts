import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const DefinedTermType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'chemicalRole',
   itemScope: true,
   itemType: 'https://schema.org/DefinedTerm',
   ...props
  },
  children
 );
};

const ChemicalRole: Type & { DefinedTerm: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'chemicalRole',
   ...props
  },
  children
 );
};

ChemicalRole.DefinedTerm = DefinedTermType;

export { ChemicalRole };
