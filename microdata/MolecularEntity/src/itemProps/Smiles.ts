import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'smiles',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const Smiles: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'smiles',
   ...props
  },
  children
 );
};

Smiles.Text = TextType;

export { Smiles };
