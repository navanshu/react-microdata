import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'chemicalComposition',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const ChemicalComposition: Type & { Text: Type } = ({
 as = 'div',
 children,
 ...props
}) => {
 return createElement(
  as,
  {
   itemProp: 'chemicalComposition',
   ...props
  },
  children
 );
};

ChemicalComposition.Text = TextType;

export { ChemicalComposition };
