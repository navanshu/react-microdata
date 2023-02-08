import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'molecularFormula',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const MolecularFormula: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'molecularFormula',
   ...props
  },
  children
 );
};

MolecularFormula.Text = TextType;

export { MolecularFormula };
