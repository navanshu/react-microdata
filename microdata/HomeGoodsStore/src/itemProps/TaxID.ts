import { createElement, FC, HTMLAttributes, HTMLProps } from 'react';

type Type = FC<HTMLProps<HTMLAttributes<any>> & { as?: string }>;

const TextType: Type = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemScope: true,
   itemProp: 'taxID',
   itemType: 'https://schema.org/Text',
   ...props
  },
  children
 );
};

const TaxID: Type & { Text: Type } = ({ as = 'div', children, ...props }) => {
 return createElement(
  as,
  {
   itemProp: 'taxID',
   ...props
  },
  children
 );
};

TaxID.Text = TextType;

export { TaxID };
